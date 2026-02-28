import requests
import json
import re
from typing import Dict, List
from pathlib import Path
import psycopg2
from psycopg2 import errors
from psycopg2.extras import execute_batch
#python -m pip install requests psycopg2-binary
import logging

# 配置日志：输出到文件 + 终端打印 + 格式化
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(module)s - %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
    filename="app.log",  # 日志保存到当前目录的 app.log 文件中
    filemode="a"  # 写入模式：a = 追加（默认），w = 覆盖（每次运行清空旧日志）
)
# 配置项
API_URL = "http://oa.itg.cn/api/cube/restful/interface/getModeDataPageList/itg_intranetnews"  # 第一接口地址
HTML_SAVE_DIR = "./saved_html_files"  # HTML文件保存目录
PG_DB_CONFIG = {
    "host": "localhost",
    "port": "5433",
    "user": "sga_user",
    "password": "change-this-password",
    "dbname": "sga_workspace",
    "options": "-c client_encoding=utf8"
}

# 自定义请求头（无需Content-Type: application/json，requests会自动设置为x-www-form-urlencoded）
API_REQUEST_HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "systemid": "AIKMP",
    "currentDateTime": "20260113173204",
    "Md5": "b734c80cdedce48bf70fc6a116378676"
}

# 接口基础请求数据（datajson对应的原始JSON结构，pageNo将动态修改）
BASE_DATA_JSON = {
    "operationinfo": {"operator": "15273"},
    "mainTable": {"id": "1"},
    "pageInfo": {"pageNo": "1", "pageSize": "10"},
    "header": {
        "systemid": "AIKMP",
        "currentDateTime": "20260113173204",
        "Md5": "b734c80cdedce48bf70fc6a116378676"
    }
}

# def sanitize_filename(filename: str) -> str:
#     """清洗文件名：移除/替换非法字符，避免文件保存失败"""
#     if not filename or not isinstance(filename, str):
#         return "unnamed_document"
#     illegal_chars = r'[\\/:*?"<>|]'
#     sanitized_name = re.sub(illegal_chars, "_", filename).strip()
#     if len(sanitized_name) > 100:
#         sanitized_name = sanitized_name[:100]
#     return sanitized_name if sanitized_name else "unnamed_document"
def sanitize_filename(filename: str) -> str:
    """清洗文件名：移除/替换显式非法字符+不可见控制字符，避免文件保存失败"""
    if not filename or not isinstance(filename, str):
        return "unnamed_document"
    
    # 步骤1：定义所有非法字符（含显式符号 + 不可见控制字符）
    # 1. 显式非法字符：Windows 禁止的 \ / : * ? " < > |
    # 2. 不可见控制字符：\n（换行）、\r（回车）、\t（制表符）等（用 \s 匹配所有空白，再排除普通空格）
    illegal_chars = r'[\\/:*?"<>|]'
    control_chars = r'[\n\r\t\v\f]'  # 匹配换行、回车、制表符、垂直制表符、换页符
    
    # 步骤2：先替换不可见控制字符为单个空格（避免直接删除导致语义混淆）
    filename_clean = re.sub(control_chars, " ", filename)
    
    # 步骤3：替换显式非法字符为下划线
    filename_clean = re.sub(illegal_chars, "_", filename_clean)
    
    # 步骤4：处理多余空白（连续空格→单个空格，首尾空格去除）
    filename_clean = re.sub(r'\s+', " ", filename_clean).strip()
    
    # 步骤5：超长文件名截断（最大100字符，避免系统限制）
    if len(filename_clean) > 100:
        filename_clean = filename_clean[:100]
    
    # 步骤6：兜底校验（确保返回有效文件名）
    return filename_clean if filename_clean else "unnamed_document"
def create_html_save_dir(dir_path: str):
    """创建HTML保存目录（若不存在）"""
    Path(dir_path).mkdir(parents=True, exist_ok=True)
    print(f"HTML保存目录检查/创建成功：{dir_path}")

def send_paginated_api_request(page_no: int) -> Dict:
    """
    适配x-www-form-urlencoded格式，携带datajson参数发送API请求
    核心：构造datajson键值对，以表单编码格式传递
    """
    # 步骤1：复制基础JSON结构，动态修改页码
    current_data_json = json.loads(json.dumps(BASE_DATA_JSON))
    current_data_json["pageInfo"]["pageNo"] = str(page_no)  # 适配接口参数格式为字符串
    
    # 步骤2：将JSON结构序列化为字符串（作为datajson键的值）
    datajson_str = json.dumps(current_data_json, ensure_ascii=False)
    
    # 步骤3：构造表单编码的请求数据（对应--data-urlencode的传参格式）
    form_data = {
        "datajson": datajson_str
    }
    
    try:
        response = requests.post(
            url=API_URL,
            data=form_data,  # 核心：使用data参数传递表单数据，自动编码为x-www-form-urlencoded
            headers=API_REQUEST_HEADERS,
            timeout=300
        )
        response.raise_for_status()
        return_data = response.json()
        logging.info(f"第{page_no}页API请求成功，获取返回数据:{return_data}")
        return return_data
    except requests.exceptions.RequestException as e:
        raise Exception(f"第{page_no}页API请求失败：{str(e)}")
    except json.JSONDecodeError as e:
        raise Exception(f"第{page_no}页JSON数据解析失败：{str(e)}")

def extract_single_page_data(return_json: Dict, page_no: int) -> List[Dict]:
    """提取单页result数组中的mainTable数据，同时以docsubject为文件名保存HTML"""
    if "result" not in return_json:
        raise Exception(f"第{page_no}页缺少有效的result数组")
        # 第三步：解析字符串为 Python 原生类型（关键步骤）
    # 若 result_value 是字符串：尝试解析为 JSON 数据（数组/字典等）
    # 若 result_value 已是列表：直接跳过（兼容原有正常场景）
    result_value = return_json["result"]
    if isinstance(result_value, str):
        parsed_result = json.loads(result_value)
    else:
        parsed_result = result_value

    # 第四步：校验解析后是否为真正的列表类型（支持空列表 []）
    if not isinstance(parsed_result, list):
        raise Exception(f"第{page_no}页缺少有效的result数组")
    mainTable_list = []
    create_html_save_dir(HTML_SAVE_DIR)
    
    for idx, item in enumerate(parsed_result, 1):
        if "mainTable" not in item or not isinstance(item["mainTable"], dict):
            continue
        
        mainTable_data = item["mainTable"]
        mainTable_list.append(mainTable_data)
        
        # 提取docsubject作为文件名，保存doccontent为HTML
        docsubject = mainTable_data.get("docsubject", "")
        doccontent = mainTable_data.get("doccontent", "")
        doccreatedate=mainTable_data.get("doccreatedate", "")
        file_name = sanitize_filename(docsubject)
        unique_file_name = f"{doccreatedate}_{file_name}.html"
        html_file_path = Path(HTML_SAVE_DIR) / unique_file_name
        
        if doccontent:
            try:
                with open(html_file_path, "w", encoding="utf-8") as f:
                    f.write(doccontent)
                print(f"  第{page_no}页第{idx}条HTML已保存：{html_file_path}")
            except IOError as e:
                raise Exception(f"  第{page_no}页第{idx}条HTML保存失败：{str(e)}")
        else:
            print(f"  第{page_no}页第{idx}条无有效doccontent，跳过HTML保存")
    
    if not mainTable_list:
        print(f"第{page_no}页未提取到有效的mainTable数据")
    else:
        print(f"第{page_no}页成功提取到{len(mainTable_list)}条mainTable数据")
    
    return mainTable_list

def get_all_paginated_data() -> List[Dict]:
    """遍历所有分页，获取完整的mainTable数据"""
    all_mainTable_data = []
    current_page = 2377
    page_size = int(BASE_DATA_JSON["pageInfo"]["pageSize"])
    while current_page<=3000:
        try:
            page_return_json = send_paginated_api_request(current_page)
            current_page_data = extract_single_page_data(page_return_json, current_page)
            # 步骤3：当前页数据独立入库（核心修改：无需汇总，直接入库）
            save_single_page_to_pg_db(current_page_data, current_page)
            if not current_page_data:
                print(f"第{current_page}页无有效数据，终止分页遍历")
                break
            all_mainTable_data.extend(current_page_data)
            
            if len(current_page_data) < page_size:
                print(f"第{current_page}页为最后一页（数据条数不足{page_size}条），终止分页遍历")
                break
            
            current_page += 1
        except Exception as e:
            print(f"第{current_page}页处理失败，终止分页遍历：{str(e)}")
            break
    
    print(f"分页遍历完成，共获取到{len(all_mainTable_data)}条mainTable数据（累计{current_page-1}页）")
    return all_mainTable_data

def create_mainTable_table_if_not_exists():
    """自动创建PostgreSQL数据表（若不存在）"""
    connection = None
    try:
        connection = psycopg2.connect(**PG_DB_CONFIG)
        connection.autocommit = False
        with connection.cursor() as cursor:
            create_table_sql = """
            CREATE TABLE IF NOT EXISTS main_table_data (
                id SERIAL PRIMARY KEY,
                seccategory VARCHAR(255) DEFAULT '',
                attachments VARCHAR(255) DEFAULT '',
                doccontent TEXT DEFAULT '',
                treedocFieldName VARCHAR(255) DEFAULT '',
                doccreatedate VARCHAR(50) DEFAULT '',
                zhref VARCHAR(255) DEFAULT '',
                docsubject VARCHAR(255) DEFAULT '',
                doccreatetime VARCHAR(50) DEFAULT '',
                zpubdate VARCHAR(50) DEFAULT '',
                lastmoddatetime VARCHAR(50) DEFAULT '',
                istop VARCHAR(20) DEFAULT '',
                docdummydetailid VARCHAR(50) DEFAULT '',
                docstatus VARCHAR(50) DEFAULT '',
                ts VARCHAR(50) DEFAULT '',
                create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
            """
            cursor.execute(create_table_sql)
        connection.commit()
        print("PostgreSQL mainTable数据表检查/创建成功")
    except psycopg2.Error as e:
        if connection:
            connection.rollback()
        raise Exception(f"PostgreSQL创建数据表失败：{str(e)}")
    finally:
        if connection:
            connection.close()

def save_all_mainTable_to_pg_db(all_mainTable_data: List[Dict]):
    """将所有分页的mainTable数据按字段批量存入PostgreSQL数据库"""
    if not all_mainTable_data:
        raise Exception("无有效mainTable数据可存入数据库")
    
    create_mainTable_table_if_not_exists()
    connection = None
    
    try:
        connection = psycopg2.connect(**PG_DB_CONFIG)
        connection.autocommit = False
        with connection.cursor() as cursor:
            first_mainTable = all_mainTable_data[0]
            #fields = [k for k in first_mainTable.keys() if k]
            fields = [k for k in first_mainTable.keys() if k and k != 'id']
            fields_str = ", ".join(fields)
            placeholders = ", ".join(["%s"] * len(fields))
            insert_sql = f"INSERT INTO main_table_data ({fields_str}) VALUES ({placeholders})"
            logging.info(f"sql{insert_sql}")
            insert_data = []
            for item in all_mainTable_data:
                item_values = [item.get(field, "") for field in fields]
                insert_data.append(tuple(item_values))
            
            execute_batch(cursor, insert_sql, insert_data, page_size=100)
        
        connection.commit()
        print(f"成功将{len(all_mainTable_data)}条分页mainTable数据存入PostgreSQL数据库")
    except psycopg2.Error as e:
        if connection:
            connection.rollback()
        raise Exception(f"PostgreSQL数据库批量插入失败：{str(e)}")
    finally:
        if connection:
            connection.close()

def save_single_page_to_pg_db(page_data: List[Dict], page_no: int):
    """
    单页数据独立入库（核心：每个分页单独插入数据库）
    @param page_data: 单页mainTable数据列表
    @param page_no: 当前页码（用于日志打印）
    """
    if not page_data:
        print(f"第{page_no}页无有效数据，跳过入库")
        return
    
    # 确保数据表已存在
    #create_mainTable_table_if_not_exists()
    connection = None
    
    try:
        connection = psycopg2.connect(**PG_DB_CONFIG)
        connection.autocommit = False
        with connection.cursor() as cursor:
            # 提取字段（过滤空键和id字段）
            first_mainTable = page_data[0]
            fields = [k for k in first_mainTable.keys() if k and k != 'id']
            fields_str = ", ".join(fields)
            placeholders = ", ".join(["%s"] * len(fields))
            
            # 构造插入SQL
            insert_sql = f"INSERT INTO main_table_data ({fields_str}) VALUES ({placeholders})"
            logging.info(f"第{page_no}页入库SQL：{insert_sql}")
            
            # 构造插入数据
            insert_data = []
            for item in page_data:
                item_values = [item.get(field, "") for field in fields]
                insert_data.append(tuple(item_values))
            
            # 单页批量插入（page_size=100，适配单页数据量）
            execute_batch(cursor, insert_sql, insert_data, page_size=100)
        
        connection.commit()
        print(f"第{page_no}页数据入库成功，共插入{len(page_data)}条记录")
    except psycopg2.Error as e:
        if connection:
            connection.rollback()
        raise Exception(f"第{page_no}页数据入库失败：{str(e)}")
    finally:
        if connection:
            connection.close()
def main():
    """主执行流程：分页遍历 → 提取数据 → 按docsubject保存HTML → 批量入库PostgreSQL"""
    try:
        all_mainTable_data = get_all_paginated_data()
 
        print("所有操作执行完成！")
    except Exception as e:
        print(f"执行出错：{str(e)}")

if __name__ == "__main__":
    main()