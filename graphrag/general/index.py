#
#  Copyright 2025 The InfiniFlow Authors. All Rights Reserved.
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.
#
import json
import logging
import os
from typing import Optional, Dict, Any, List

import networkx as nx
import trio

from api.db.services.document_service import DocumentService
from api.db.services.task_service import has_canceled
from common.exceptions import TaskCanceledException
from common.misc_utils import get_uuid
from common.connection_utils import timeout
from graphrag.entity_resolution import EntityResolution
from graphrag.general.community_reports_extractor import CommunityReportsExtractor
from graphrag.general.extractor import Extractor
from graphrag.general.graph_extractor import GraphExtractor as GeneralKGExt
from graphrag.light.graph_extractor import GraphExtractor as LightKGExt
from graphrag.utils import (
    GraphChange,
    chunk_id,
    does_graph_contains,
    get_graph,
    graph_merge,
    set_graph,
    tidy_graph,
)
from rag.nlp import rag_tokenizer, search
from rag.utils.redis_conn import RedisDistributedLock
from common import settings


async def run_graphrag(
    row: dict,
    language: str,
    with_resolution: bool,
    with_community: bool,
    chat_model,
    embedding_model,
    callback,
) -> bool:
    """
    Run GraphRAG processing for a document.

    Args:
        row: Task row containing document and configuration information
        language: Language for processing
        with_resolution: Whether to perform entity resolution
        with_community: Whether to generate community reports
        chat_model: LLM model for chat operations
        embedding_model: Embedding model for vector operations
        callback: Progress callback function

    Returns:
        bool: True if processing completed successfully, False otherwise
    """
    enable_timeout_assertion = os.environ.get("ENABLE_TIMEOUT_ASSERTION")
    start = trio.current_time()

    try:
        # Validate input parameters
        if not row or not isinstance(row, dict):
            raise ValueError("Invalid task row provided")

        tenant_id = row.get("tenant_id")
        kb_id = str(row.get("kb_id", ""))
        doc_id = row.get("doc_id")

        if not all([tenant_id, kb_id, doc_id]):
            raise ValueError(f"Missing required parameters: tenant_id={tenant_id}, kb_id={kb_id}, doc_id={doc_id}")

        # Get GraphRAG configuration with defaults
        graphrag_config = row.get("kb_parser_config", {}).get("graphrag", {})
        entity_types = graphrag_config.get("entity_types", ["organization", "person", "geo", "event", "category"])
        method = graphrag_config.get("method", "light")

        callback(msg=f"Starting GraphRAG processing for doc {doc_id} with method={method}")

        # Retrieve document chunks
        chunks = []
        try:
            for d in settings.retriever.chunk_list(doc_id, tenant_id, [kb_id], fields=["content_with_weight", "doc_id"], sort_by_position=True):
                chunks.append(d["content_with_weight"])
        except Exception as e:
            logging.error(f"Failed to retrieve chunks for doc {doc_id}: {e}")
            callback(msg=f"Error retrieving chunks: {str(e)}")
            return False

        if not chunks:
            callback(msg=f"No chunks found for doc {doc_id}, skipping GraphRAG processing")
            return True

        callback(msg=f"Retrieved {len(chunks)} chunks for processing")

        # Generate subgraph with timeout
        extractor_class = GeneralKGExt if method == "general" else LightKGExt
        timeout_seconds = max(120, len(chunks) * 60 * 10) if enable_timeout_assertion else 10000000000

        task_id = row.get("id", "")
        
        with trio.fail_after(timeout_seconds):
            subgraph = await generate_subgraph(
                extractor_class,
                tenant_id,
                kb_id,
                doc_id,
                chunks,
                language,
                entity_types,
                chat_model,
                embedding_model,
                callback,
                task_id=task_id,
            )

        if not subgraph:
            callback(msg=f"No subgraph generated for doc {doc_id}")
            return True

        # Acquire distributed lock for graph operations
        graphrag_task_lock = RedisDistributedLock(f"graphrag_task_{kb_id}", lock_value=doc_id, timeout=1200)
        await graphrag_task_lock.spin_acquire()
        callback(msg=f"Acquired GraphRAG task lock for kb {kb_id}")

        try:
            # Merge subgraph into global graph
            subgraph_nodes = set(subgraph.nodes())
            new_graph = await merge_subgraph(
                tenant_id,
                kb_id,
                doc_id,
                subgraph,
                embedding_model,
                callback,
                task_id=task_id,
            )

            if new_graph is None:
                raise RuntimeError("Failed to merge subgraph into global graph")

            # Perform entity resolution if requested
            if with_resolution:
                await graphrag_task_lock.spin_acquire()
                callback(msg=f"Starting entity resolution for doc {doc_id}")
                await resolve_entities(
                    new_graph,
                    subgraph_nodes,
                    tenant_id,
                    kb_id,
                    doc_id,
                    chat_model,
                    embedding_model,
                    callback,
                    task_id=task_id,
                )

            # Generate community reports if requested
            if with_community:
                await graphrag_task_lock.spin_acquire()
                callback(msg=f"Starting community report generation for doc {doc_id}")
                await extract_community(
                    new_graph,
                    tenant_id,
                    kb_id,
                    doc_id,
                    chat_model,
                    embedding_model,
                    callback,
                    task_id=task_id,
                )

        finally:
            graphrag_task_lock.release()

        processing_time = trio.current_time() - start
        callback(msg=f"GraphRAG processing completed for doc {doc_id} in {processing_time:.2f} seconds")
        return True

    except Exception as e:
        processing_time = trio.current_time() - start
        error_msg = f"GraphRAG processing failed for doc {doc_id} after {processing_time:.2f} seconds: {str(e)}"
        logging.error(error_msg, exc_info=True)
        callback(msg=error_msg)
        return False


async def run_graphrag_for_kb(
    row: dict,
    doc_ids: list[str],
    language: str,
    kb_parser_config: dict,
    chat_model,
    embedding_model,
    callback,
    *,
    with_resolution: bool = True,
    with_community: bool = True,
    max_parallel_docs: int = 4,
) -> dict:
    tenant_id, kb_id = row["tenant_id"], row["kb_id"]
    enable_timeout_assertion = os.environ.get("ENABLE_TIMEOUT_ASSERTION")
    start = trio.current_time()
    fields_for_chunks = ["content_with_weight", "doc_id"]

    if not doc_ids:
        logging.info(f"Fetching all docs for {kb_id}")
        docs, _ = DocumentService.get_by_kb_id(
            kb_id=kb_id,
            page_number=0,
            items_per_page=0,
            orderby="create_time",
            desc=False,
            keywords="",
            run_status=[],
            types=[],
            suffix=[],
        )
        doc_ids = [doc["id"] for doc in docs]

    doc_ids = list(dict.fromkeys(doc_ids))
    if not doc_ids:
        callback(msg=f"[GraphRAG] kb:{kb_id} has no processable doc_id.")
        return {"ok_docs": [], "failed_docs": [], "total_docs": 0, "total_chunks": 0, "seconds": 0.0}

    def load_doc_chunks(doc_id: str) -> list[str]:
        from common.token_utils import num_tokens_from_string

        chunks = []
        current_chunk = ""

        for d in settings.retriever.chunk_list(
            doc_id,
            tenant_id,
            [kb_id],
            fields=fields_for_chunks,
            sort_by_position=True,
        ):
            content = d["content_with_weight"]
            if num_tokens_from_string(current_chunk + content) < 1024:
                current_chunk += content
            else:
                if current_chunk:
                    chunks.append(current_chunk)
                current_chunk = content

        if current_chunk:
            chunks.append(current_chunk)

        return chunks

    all_doc_chunks: dict[str, list[str]] = {}
    total_chunks = 0
    for doc_id in doc_ids:
        chunks = load_doc_chunks(doc_id)
        all_doc_chunks[doc_id] = chunks
        total_chunks += len(chunks)

    if total_chunks == 0:
        callback(msg=f"[GraphRAG] kb:{kb_id} has no available chunks in all documents, skip.")
        return {"ok_docs": [], "failed_docs": doc_ids, "total_docs": len(doc_ids), "total_chunks": 0, "seconds": 0.0}

    semaphore = trio.Semaphore(max_parallel_docs)

    subgraphs: dict[str, object] = {}
    failed_docs: list[tuple[str, str]] = []  # (doc_id, error)

    async def build_one(doc_id: str):
        if has_canceled(row["id"]):
            callback(msg=f"Task {row['id']} cancelled, stopping execution.")
            raise TaskCanceledException(f"Task {row['id']} was cancelled")

        chunks = all_doc_chunks.get(doc_id, [])
        if not chunks:
            callback(msg=f"[GraphRAG] doc:{doc_id} has no available chunks, skip generation.")
            return

        kg_extractor = LightKGExt if ("method" not in kb_parser_config.get("graphrag", {}) or kb_parser_config["graphrag"]["method"] != "general") else GeneralKGExt

        deadline = max(120, len(chunks) * 60 * 10) if enable_timeout_assertion else 10000000000

        async with semaphore:
            try:
                msg = f"[GraphRAG] build_subgraph doc:{doc_id}"
                callback(msg=f"{msg} start (chunks={len(chunks)}, timeout={deadline}s)")
                with trio.fail_after(deadline):
                    sg = await generate_subgraph(
                        kg_extractor,
                        tenant_id,
                        kb_id,
                        doc_id,
                        chunks,
                        language,
                        kb_parser_config.get("graphrag", {}).get("entity_types", []),
                        chat_model,
                        embedding_model,
                        callback,
                        task_id=row["id"]
                    )
                if sg:
                    subgraphs[doc_id] = sg
                    callback(msg=f"{msg} done")
                else:
                    failed_docs.append((doc_id, "subgraph is empty"))
                    callback(msg=f"{msg} empty")
            except TaskCanceledException as canceled:
                callback(msg=f"[GraphRAG] build_subgraph doc:{doc_id} FAILED: {canceled}")
            except Exception as e:
                failed_docs.append((doc_id, repr(e)))
                callback(msg=f"[GraphRAG] build_subgraph doc:{doc_id} FAILED: {e!r}")

    if has_canceled(row["id"]):
        callback(msg=f"Task {row['id']} cancelled before processing documents.")
        raise TaskCanceledException(f"Task {row['id']} was cancelled")

    async with trio.open_nursery() as nursery:
        for doc_id in doc_ids:
            nursery.start_soon(build_one, doc_id)

    if has_canceled(row["id"]):
        callback(msg=f"Task {row['id']} cancelled after document processing.")
        raise TaskCanceledException(f"Task {row['id']} was cancelled")

    ok_docs = [d for d in doc_ids if d in subgraphs]
    if not ok_docs:
        callback(msg=f"[GraphRAG] kb:{kb_id} no subgraphs generated successfully, end.")
        now = trio.current_time()
        return {"ok_docs": [], "failed_docs": failed_docs, "total_docs": len(doc_ids), "total_chunks": total_chunks, "seconds": now - start}

    kb_lock = RedisDistributedLock(f"graphrag_task_{kb_id}", lock_value="batch_merge", timeout=1200)
    await kb_lock.spin_acquire()
    callback(msg=f"[GraphRAG] kb:{kb_id} merge lock acquired")

    if has_canceled(row["id"]):
        callback(msg=f"Task {row['id']} cancelled before merging subgraphs.")
        raise TaskCanceledException(f"Task {row['id']} was cancelled")

    try:
        union_nodes: set = set()
        final_graph = None

        for doc_id in ok_docs:
            sg = subgraphs[doc_id]
            union_nodes.update(set(sg.nodes()))

            new_graph = await merge_subgraph(
                tenant_id,
                kb_id,
                doc_id,
                sg,
                embedding_model,
                callback,
            )
            if new_graph is not None:
                final_graph = new_graph

        if final_graph is None:
            callback(msg=f"[GraphRAG] kb:{kb_id} merge finished (no in-memory graph returned).")
        else:
            callback(msg=f"[GraphRAG] kb:{kb_id} merge finished, graph ready.")
    finally:
        kb_lock.release()

    if not with_resolution and not with_community:
        now = trio.current_time()
        callback(msg=f"[GraphRAG] KB merge done in {now - start:.2f}s. ok={len(ok_docs)} / total={len(doc_ids)}")
        return {"ok_docs": ok_docs, "failed_docs": failed_docs, "total_docs": len(doc_ids), "total_chunks": total_chunks, "seconds": now - start}

    if has_canceled(row["id"]):
        callback(msg=f"Task {row['id']} cancelled before resolution/community extraction.")
        raise TaskCanceledException(f"Task {row['id']} was cancelled")

    await kb_lock.spin_acquire()
    callback(msg=f"[GraphRAG] kb:{kb_id} post-merge lock acquired for resolution/community")

    try:
        subgraph_nodes = set()
        for sg in subgraphs.values():
            subgraph_nodes.update(set(sg.nodes()))

        if with_resolution:
            await resolve_entities(
                final_graph,
                subgraph_nodes,
                tenant_id,
                kb_id,
                None,
                chat_model,
                embedding_model,
                callback,
                task_id=row["id"],
            )

        if with_community:
            await extract_community(
                final_graph,
                tenant_id,
                kb_id,
                None,
                chat_model,
                embedding_model,
                callback,
                task_id=row["id"],
            )
    finally:
        kb_lock.release()

    now = trio.current_time()
    callback(msg=f"[GraphRAG] GraphRAG for KB {kb_id} done in {now - start:.2f} seconds. ok={len(ok_docs)} failed={len(failed_docs)} total_docs={len(doc_ids)} total_chunks={total_chunks}")
    return {
        "ok_docs": ok_docs,
        "failed_docs": failed_docs,  # [(doc_id, error), ...]
        "total_docs": len(doc_ids),
        "total_chunks": total_chunks,
        "seconds": now - start,
    }


async def generate_subgraph(
    extractor: Extractor,
    tenant_id: str,
    kb_id: str,
    doc_id: str,
    chunks: list[str],
    language: str,
    entity_types: list[str],
    llm_bdl,
    embedding_model,
    callback,
    task_id: str = "",
) -> nx.Graph:
    """
    Generate a subgraph from document chunks using entity and relation extraction.

    Args:
        extractor: The extractor class to use (GeneralKGExt or LightKGExt)
        tenant_id: Tenant identifier
        kb_id: Knowledge base identifier
        doc_id: Document identifier
        chunks: List of text chunks to process
        language: Language for processing
        entity_types: List of entity types to extract
        llm_bdl: LLM model bundle
        embedding_model: Embedding model for vector operations
        callback: Progress callback function

    Returns:
        nx.Graph: Generated subgraph or None if already exists
    """
    try:
        # Check if graph already contains this document
        if task_id and has_canceled(task_id):
            callback(msg=f"Task {task_id} cancelled during subgraph generation for doc {doc_id}.")
            raise TaskCanceledException(f"Task {task_id} was cancelled")

        contains = await does_graph_contains(tenant_id, kb_id, doc_id)
        if contains:
            callback(msg=f"Graph already contains doc {doc_id}, skipping subgraph generation")
            return None

        start = trio.current_time()
        callback(msg=f"Starting subgraph generation for doc {doc_id} with {len(chunks)} chunks")

        # Validate inputs
        if not chunks:
            callback(msg=f"No chunks provided for doc {doc_id}")
            return None

        if not entity_types:
            entity_types = ["organization", "person", "geo", "event", "category"]
            callback(msg=f"Using default entity types: {entity_types}")

        # Initialize extractor
        ext = extractor(
            llm_bdl,
            language=language,
            entity_types=entity_types,
        )

        # 获取文档名称用于日志显示
        try:
            _, doc_info = DocumentService.get_by_id(doc_id)
            doc_name = doc_info.name if doc_info else doc_id[:8]
        except Exception:
            doc_name = doc_id[:8]  # fallback 显示 ID 前 8 位

        # Extract entities and relations
        callback(msg=f"[>] {doc_name} 开始处理 (共 {len(chunks)} 个分块)")
        ents, rels = await ext(doc_id, chunks, callback, task_id=task_id, doc_name=doc_name)

        if not ents and not rels:
            callback(msg=f"[!] {doc_name} 未提取到实体或关系")
            return None

        callback(msg=f"[OK] {doc_name} 提取完成 - {len(ents)} 实体, {len(rels)} 关系")

        # Build subgraph
        subgraph = nx.Graph()

        # Add entities as nodes
        valid_entities = 0
        
        for ent in ents:
            if task_id and has_canceled(task_id):
                callback(msg=f"Task {task_id} cancelled during entity processing for doc {doc_id}.")
                raise TaskCanceledException(f"Task {task_id} was cancelled")

            try:
                if "description" not in ent:
                    logging.warning(f"Entity {ent} missing description, skipping")
                    continue
                if "entity_name" not in ent:
                    logging.warning(f"Entity {ent} missing entity_name, skipping")
                    continue

                ent["source_id"] = [doc_id]
                subgraph.add_node(ent["entity_name"], **ent)
                valid_entities += 1
            except Exception as e:
                logging.error(f"Error adding entity {ent}: {e}")
                continue

        ignored_rels = 0
        for rel in rels:
            if task_id and has_canceled(task_id):
                callback(msg=f"Task {task_id} cancelled during relationship processing for doc {doc_id}.")
                raise TaskCanceledException(f"Task {task_id} was cancelled")
                
            assert "description" in rel, f"relation {rel} does not have description"
            if not subgraph.has_node(rel["src_id"]) or not subgraph.has_node(rel["tgt_id"]):
                ignored_rels += 1
                continue
            rel["source_id"] = [doc_id]
            subgraph.add_edge(
                rel["src_id"],
                rel["tgt_id"],
                **rel,
            )
            
        if ignored_rels:
            callback(msg=f"ignored {ignored_rels} relations due to missing entities.")
        tidy_graph(subgraph, callback, check_attribute=False)

        if len(subgraph.nodes) == 0:
            callback(msg=f"No valid nodes in subgraph for doc {doc_id}")
            return None

        # Store subgraph metadata
        subgraph.graph["source_id"] = [doc_id]

        # Serialize and store subgraph
        try:
            chunk = {
                "content_with_weight": json.dumps(nx.node_link_data(subgraph, edges="edges"), ensure_ascii=False),
                "knowledge_graph_kwd": "subgraph",
                "kb_id": kb_id,
                "source_id": [doc_id],
                "available_int": 0,
                "removed_kwd": "N",
            }
            cid = chunk_id(chunk)

            # Delete existing subgraph for this document
            await trio.to_thread.run_sync(
                settings.docStoreConn.delete,
                {"knowledge_graph_kwd": "subgraph", "source_id": doc_id},
                search.index_name(tenant_id),
                kb_id
            )

            # Insert new subgraph
            await trio.to_thread.run_sync(
                settings.docStoreConn.insert,
                [{"id": cid, **chunk}],
                search.index_name(tenant_id),
                kb_id
            )

        except Exception as e:
            logging.error(f"Failed to store subgraph for doc {doc_id}: {e}")
            raise

        processing_time = trio.current_time() - start
        callback(msg=f"Generated subgraph for doc {doc_id} in {processing_time:.2f} seconds")
        return subgraph

    except Exception as e:
        error_msg = f"Failed to generate subgraph for doc {doc_id}: {str(e)}"
        logging.error(error_msg, exc_info=True)
        callback(msg=error_msg)
        return None


@timeout(60 * 5)  # Increased timeout for large graphs
async def merge_subgraph(
    tenant_id: str,
    kb_id: str,
    doc_id: str,
    subgraph: nx.Graph,
    embedding_model,
    callback,
    task_id: str = "",
) -> nx.Graph:
    """
    Merge a document subgraph into the global knowledge graph.

    Args:
        tenant_id: Tenant identifier
        kb_id: Knowledge base identifier
        doc_id: Document identifier
        subgraph: The subgraph to merge
        embedding_model: Embedding model for vector operations
        callback: Progress callback function
        task_id: Task ID for cancellation checking

    Returns:
        nx.Graph: The merged global graph
    """
    # Check if task has been canceled before merging
    if task_id and has_canceled(task_id):
        callback(msg=f"Task {task_id} cancelled before merging subgraph for doc {doc_id}.")
        raise TaskCanceledException(f"Task {task_id} was cancelled")
        
    start = trio.current_time()

    try:
        if not subgraph or len(subgraph.nodes) == 0:
            raise ValueError(f"Empty or invalid subgraph provided for doc {doc_id}")

        callback(msg=f"Starting merge of subgraph for doc {doc_id} with {len(subgraph.nodes)} nodes and {len(subgraph.edges)} edges")

        change = GraphChange()

        # Get existing global graph
        old_graph = await get_graph(tenant_id, kb_id, subgraph.graph["source_id"])

        if old_graph is not None:
            callback(msg=f"Merging with existing graph containing {len(old_graph.nodes)} nodes and {len(old_graph.edges)} edges")

            # Clean the existing graph
            tidy_graph(old_graph, callback)

            # Merge graphs
            new_graph = graph_merge(old_graph, subgraph, change)
        else:
            callback(msg="Creating new global graph from subgraph")
            new_graph = subgraph.copy()
            change.added_updated_nodes = set(new_graph.nodes())
            change.added_updated_edges = set(new_graph.edges())

        # Calculate PageRank for node importance
        callback(msg="Calculating PageRank scores")
        try:
            pr = nx.pagerank(new_graph, max_iter=100, tol=1e-6)
            for node_name, pagerank in pr.items():
                new_graph.nodes[node_name]["pagerank"] = pagerank
        except Exception as e:
            logging.warning(f"PageRank calculation failed: {e}, using default values")
            for node_name in new_graph.nodes():
                new_graph.nodes[node_name]["pagerank"] = 0.0

        # Store the updated graph
        await set_graph(tenant_id, kb_id, embedding_model, new_graph, change, callback)

        processing_time = trio.current_time() - start
        callback(msg=f"Successfully merged subgraph for doc {doc_id} into global graph in {processing_time:.2f} seconds")
        callback(msg=f"Global graph now contains {len(new_graph.nodes)} nodes and {len(new_graph.edges)} edges")

        return new_graph

    except Exception as e:
        processing_time = trio.current_time() - start
        error_msg = f"Failed to merge subgraph for doc {doc_id} after {processing_time:.2f} seconds: {str(e)}"
        logging.error(error_msg, exc_info=True)
        callback(msg=error_msg)
        raise


@timeout(60 * 30, 1)
async def resolve_entities(
    graph: nx.Graph,
    subgraph_nodes: set[str],
    tenant_id: str,
    kb_id: str,
    doc_id: str,
    llm_bdl,
    embedding_model,
    callback,
):
    start = trio.current_time()
    er = EntityResolution(
        llm_bdl,
    )
    reso = await er(graph, subgraph_nodes, callback=callback)
    graph = reso.graph
    change = reso.change
    callback(msg=f"Graph resolution removed {len(change.removed_nodes)} nodes and {len(change.removed_edges)} edges.")
    callback(msg="Graph resolution updated pagerank.")

    await set_graph(tenant_id, kb_id, embed_bdl, graph, change, callback)
    now = trio.current_time()
    callback(msg=f"Graph resolution done in {now - start:.2f}s.")


@timeout(60 * 30, 1)
async def extract_community(
    graph: nx.Graph,
    tenant_id: str,
    kb_id: str,
    doc_id: str,
    llm_bdl,
    embedding_model,
    callback,
):
    start = trio.current_time()
    ext = CommunityReportsExtractor(
        llm_bdl,
    )
    cr = await ext(graph, callback=callback)
    community_structure = cr.structured_output
    community_reports = cr.output
    doc_ids = graph.graph["source_id"]

    now = trio.current_time()
    callback(msg=f"Graph extracted {len(cr.structured_output)} communities in {now - start:.2f}s.")
    start = now
    chunks = []
    for stru, rep in zip(community_structure, community_reports):
        obj = {
            "report": rep,
            "evidences": "\n".join([f.get("explanation", "") for f in stru["findings"]]),
        }
        chunk = {
            "id": get_uuid(),
            "docnm_kwd": stru["title"],
            "title_tks": rag_tokenizer.tokenize(stru["title"]),
            "content_with_weight": json.dumps(obj, ensure_ascii=False),
            "content_ltks": rag_tokenizer.tokenize(obj["report"] + " " + obj["evidences"]),
            "knowledge_graph_kwd": "community_report",
            "weight_flt": stru["weight"],
            "entities_kwd": stru["entities"],
            "important_kwd": stru["entities"],
            "kb_id": kb_id,
            "source_id": list(doc_ids),
            "available_int": 0,
        }
        chunk["content_sm_ltks"] = rag_tokenizer.fine_grained_tokenize(chunk["content_ltks"])
        chunks.append(chunk)

    if not chunks:
        callback(msg="No valid community report chunks generated")
        return community_structure, community_reports

    # Delete existing community reports
    try:
        await trio.to_thread.run_sync(
            lambda: settings.docStoreConn.delete(
                {"knowledge_graph_kwd": "community_report", "kb_id": kb_id},
                search.index_name(tenant_id),
                kb_id,
            )
        )
    except Exception as e:
        logging.warning(f"Failed to delete existing community reports: {e}")

    # Insert new community reports in batches
    es_bulk_size = 4
    successful_inserts = 0

    for b in range(0, len(chunks), es_bulk_size):
        try:
            batch = chunks[b : b + es_bulk_size]
            doc_store_result = await trio.to_thread.run_sync(
                lambda: settings.docStoreConn.insert(batch, search.index_name(tenant_id), kb_id)
            )

            if doc_store_result:
                error_message = f"Insert chunk error: {doc_store_result}, please check log file and Elasticsearch/Infinity status!"
                logging.error(error_message)
                raise Exception(error_message)
        except Exception as e:
            logging.error(f"Error inserting community report batch: {e}")

    now = trio.current_time()
    callback(msg=f"Graph indexed {len(cr.structured_output)} communities in {now - start:.2f}s.")
    return community_structure, community_reports
