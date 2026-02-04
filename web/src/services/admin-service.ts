import { message, notification } from 'antd';
import axios from 'axios';
import { history } from 'umi';

import { Authorization } from '@/constants/authorization';
import i18n from '@/locales/config';
import { Routes } from '@/routes';
import api from '@/utils/api';
import authorizationUtil, {
  getAuthorization,
} from '@/utils/authorization-util';
import { convertTheKeysOfTheObjectToSnake } from '@/utils/common-util';
import { ResultCode, RetcodeMessage } from '@/utils/request';

const request = axios.create({
  timeout: 300000,
});

request.interceptors.request.use((config) => {
  const data = convertTheKeysOfTheObjectToSnake(config.data);
  const params = convertTheKeysOfTheObjectToSnake(config.params) as any;

  const newConfig = { ...config, data, params };

  // @ts-ignore
  if (!newConfig.skipToken) {
    newConfig.headers.set(Authorization, getAuthorization());
  }

  return newConfig;
});

request.interceptors.response.use(
  (response) => {
    if (response.config.responseType === 'blob') {
      return response;
    }

    const { data } = response ?? {};

    if (data?.code === 100) {
      message.error(data?.message);
    } else if (data?.code === 401) {
      notification.error({
        message: data?.message,
        description: data?.message,
        duration: 3,
      });

      authorizationUtil.removeAll();
      history.push(Routes.Admin);
    } else if (data?.code && data.code !== 0) {
      notification.error({
        message: `${i18n.t('message.hint')}: ${data?.code}`,
        description: data?.message,
        duration: 3,
      });
    }

    return response;
  },
  (error) => {
    const { response, message } = error;
    const { data } = response ?? {};

    if (error.message === 'Failed to fetch') {
      notification.error({
        description: i18n.t('message.networkAnomalyDescription'),
        message: i18n.t('message.networkAnomaly'),
      });
    } else if (data?.code === 100) {
      message.error(data?.message);
    } else if (response.status === 401 || data?.code === 401) {
      notification.error({
        message: data?.message || response.statusText,
        description:
          data?.message || RetcodeMessage[response?.status as ResultCode],
        duration: 3,
      });

      authorizationUtil.removeAll();
      history.push(Routes.Admin);
    } else if (data?.code && data.code !== 0) {
      notification.error({
        message: `${i18n.t('message.hint')}: ${data?.code}`,
        description: data?.message,
        duration: 3,
      });
    } else if (response.status) {
      notification.error({
        message: `${i18n.t('message.requestError')} ${response.status}: ${response.config.url}`,
        description:
          RetcodeMessage[response.status as ResultCode] || response.statusText,
      });
    } else if (response.status === 413 || response?.status === 504) {
      message.error(RetcodeMessage[response?.status as ResultCode]);
    }

    throw error;
  },
);

const {
  adminLogin,
  adminLogout,
  adminListUsers,
  adminCreateUser,
  adminGetUserDetails,
  adminUpdateUserStatus,
  adminUpdateUserPassword,
  adminDeleteUser,
  adminListUserDatasets,
  adminListUserAgents,

  adminListServices,
  adminShowServiceDetails,

  adminListRoles,
  adminListRolesWithPermission,
  adminCreateRole,
  adminDeleteRole,
  adminUpdateRoleDescription,
  adminGetRolePermissions,
  adminAssignRolePermissions,
  adminRevokeRolePermissions,

  adminGetUserPermissions,
  adminUpdateUserRole,

  adminListResources,

  adminListWhitelist,
  adminCreateWhitelistEntry,
  adminUpdateWhitelistEntry,
  adminDeleteWhitelistEntry,
  adminImportWhitelist,

  adminGetSystemVersion,
  adminGetSystemSettings,
  adminUpdateSystemSettings,
  syncGetConfig,
  syncUpdateConfig,
  syncTrigger,
  syncTriggerGraph,
  syncGetStatus,
  syncTestKb,
  archiveSyncGetConfig,
  archiveSyncUpdateConfig,
  archiveSyncGetCategories,
  archiveSyncRefreshCategories,
  archiveSyncTrigger,
  archiveSyncTriggerGraph,
} = api;

type ResponseData<D = NonNullable<unknown>> = {
  code: number;
  message: string;
  data: D;
};

export const login = (params: { email: string; password: string }) =>
  request.post<ResponseData<AdminService.LoginData>>(adminLogin, params);
export const logout = () => request.get<ResponseData<boolean>>(adminLogout);
export const listUsers = () =>
  request.get<ResponseData<AdminService.ListUsersItem[]>>(adminListUsers, {});

export const createUser = (email: string, password: string) =>
  request.post<ResponseData<boolean>>(adminCreateUser, {
    username: email,
    password,
  });
export const getUserDetails = (email: string) =>
  request.get<ResponseData<[AdminService.UserDetail]>>(
    adminGetUserDetails(email),
  );
export const listUserDatasets = (email: string) =>
  request.get<ResponseData<AdminService.ListUserDatasetItem[]>>(
    adminListUserDatasets(email),
  );
export const listUserAgents = (email: string) =>
  request.get<ResponseData<AdminService.ListUserAgentItem[]>>(
    adminListUserAgents(email),
  );
export const updateUserStatus = (email: string, status: 'on' | 'off') =>
  request.put(adminUpdateUserStatus(email), { activate_status: status });
export const updateUserPassword = (email: string, password: string) =>
  request.put(adminUpdateUserPassword(email), { new_password: password });
export const deleteUser = (email: string) =>
  request.delete(adminDeleteUser(email));

export const listServices = () =>
  request.get<ResponseData<AdminService.ListServicesItem[]>>(adminListServices);
export const showServiceDetails = (serviceId: number) =>
  request.get<ResponseData<AdminService.ServiceDetail>>(
    adminShowServiceDetails(String(serviceId)),
  );

export const createRole = (params: {
  roleName: string;
  description?: string;
}) =>
  request.post<ResponseData<AdminService.RoleDetail>>(adminCreateRole, params);
export const updateRoleDescription = (role: string, description: string) =>
  request.put<ResponseData<AdminService.RoleDetail>>(
    adminUpdateRoleDescription(role),
    { description },
  );
export const deleteRole = (role: string) =>
  request.delete<ResponseData<ResponseData<never>>>(adminDeleteRole(role));
export const listRoles = () =>
  request.get<
    ResponseData<{ roles: AdminService.ListRoleItem[]; total: number }>
  >(adminListRoles);
export const listRolesWithPermission = () =>
  request.get<
    ResponseData<{
      roles: AdminService.ListRoleItemWithPermission[];
      total: number;
    }>
  >(adminListRolesWithPermission);
export const getRolePermissions = (role: string) =>
  request.get<ResponseData<AdminService.RoleDetailWithPermission>>(
    adminGetRolePermissions(role),
  );
export const assignRolePermissions = (
  role: string,
  permissions: Partial<AdminService.AssignRolePermissionsInput>,
) =>
  request.post<ResponseData<never>>(adminAssignRolePermissions(role), {
    new_permissions: permissions,
  });
export const revokeRolePermissions = (
  role: string,
  permissions: Partial<AdminService.RevokeRolePermissionInput>,
) =>
  request.delete<ResponseData<never>>(adminRevokeRolePermissions(role), {
    data: { revoke_permissions: permissions },
  });

export const updateUserRole = (username: string, role: string) =>
  request.put<ResponseData<never>>(adminUpdateUserRole(username), {
    role_name: role,
  });
export const getUserPermissions = (username: string) =>
  request.get<ResponseData<AdminService.UserDetailWithPermission>>(
    adminGetUserPermissions(username),
  );
export const listResources = () =>
  request.get<ResponseData<AdminService.ResourceType>>(adminListResources);

export const listWhitelist = () =>
  request.get<
    ResponseData<{
      total: number;
      white_list: AdminService.ListWhitelistItem[];
    }>
  >(adminListWhitelist);

export const createWhitelistEntry = (email: string) =>
  request.post<ResponseData<never>>(adminCreateWhitelistEntry, { email });

export const updateWhitelistEntry = (id: number, email: string) =>
  request.put<ResponseData<never>>(adminUpdateWhitelistEntry(id), { email });

export const deleteWhitelistEntry = (email: string) =>
  request.delete<ResponseData<never>>(adminDeleteWhitelistEntry(email));

export const importWhitelistFromExcel = (file: File) => {
  const fd = new FormData();

  fd.append('file', file);

  return request.post<ResponseData<never>>(adminImportWhitelist, fd);
};

export const getSystemVersion = () =>
  request.get<ResponseData<{ version: string }>>(adminGetSystemVersion);

export interface SystemSettings {
  global_llm_enabled: boolean;
  register_enabled: number;
}

export const getSystemSettings = () =>
  request.get<ResponseData<SystemSettings>>(adminGetSystemSettings);

export const updateSystemSettings = (settings: Partial<SystemSettings>) =>
  request.put<ResponseData<Partial<SystemSettings>>>(
    adminUpdateSystemSettings,
    settings,
  );

// News Sync APIs
export type SyncFrequency = 'daily' | 'weekly' | 'monthly';

export interface NewsSyncConfig {
  enabled: boolean;
  sync_time: string;
  graph_regen_time: string;
  last_sync_date: string;
  kb_mapping: Record<string, string>;
  sync_user_id?: string;
  // API URL configuration
  api_url: string;
  // News sync frequency settings
  sync_frequency: SyncFrequency;
  weekly_days: number[]; // 0-6, 0=Sunday
  monthly_days: number[]; // 1-31
  // Graph rebuild frequency settings (separate from news sync)
  graph_regen_frequency: SyncFrequency;
  graph_regen_weekly_days: number[]; // 0-6, 0=Sunday
  graph_regen_monthly_days: number[]; // 1-31
  // Computed fields
  current_year: string;
  current_year_kb_id: string;
  current_year_kb_name: string;
  sync_count: number; // News count for current year
}

export const getSyncConfig = () =>
  request.get<ResponseData<NewsSyncConfig>>(syncGetConfig);

export const updateSyncConfig = (config: Partial<NewsSyncConfig>) =>
  request.post<ResponseData<NewsSyncConfig>>(syncUpdateConfig, config);

export const triggerSync = (date?: string) =>
  request.post<ResponseData<{ message: string; date: string }>>(syncTrigger, {
    date,
  });

export const triggerGraphRegen = (years: string[]) =>
  request.post<ResponseData<{ message: string; years: string[] }>>(
    syncTriggerGraph,
    { years },
  );

export const getSyncStatus = () =>
  request.get<ResponseData<NewsSyncConfig>>(syncGetStatus);

// Test knowledge base connection
export const testKbConnection = (kbId: string) =>
  request.post<
    ResponseData<{ valid: boolean; kb_name: string; doc_count: number }>
  >(syncTestKb, { kb_id: kbId });

// ==================== Archive Sync APIs ====================

export interface ArchiveCategory {
  code: string; // doctype code like 'SFD', 'FP', 'GD'
  name: string; // category display name
  desc?: string; // optional description
}

export interface ArchiveSyncConfig {
  enabled: boolean;
  sync_time: string;
  graph_regen_time: string;
  last_sync_time: string | null;
  sync_user_id?: string;
  // API URL configuration
  api_base_url: string;
  // Sync frequency settings
  sync_frequency: SyncFrequency;
  weekly_days: number[]; // 0-6, 0=Sunday
  monthly_days: number[]; // 1-31
  // Graph rebuild frequency settings
  graph_regen_frequency: SyncFrequency;
  graph_regen_weekly_days: number[];
  graph_regen_monthly_days: number[];
  // Category to KB mapping: doctype_code -> kb_id
  category_mapping: Record<string, string>;
  // Cached categories from archive system
  categories: ArchiveCategory[];
  // Stats
  total_synced: number;
}

export const getArchiveSyncConfig = () =>
  request.get<ResponseData<ArchiveSyncConfig>>(archiveSyncGetConfig);

export const updateArchiveSyncConfig = (config: Partial<ArchiveSyncConfig>) =>
  request.post<ResponseData<ArchiveSyncConfig>>(
    archiveSyncUpdateConfig,
    config,
  );

export const getArchiveCategories = () =>
  request.get<ResponseData<ArchiveCategory[]>>(archiveSyncGetCategories);

export const refreshArchiveCategories = () =>
  request.post<ResponseData<ArchiveCategory[]>>(archiveSyncRefreshCategories);

export const triggerArchiveSync = (doctype?: string, daysBack?: number) =>
  request.post<
    ResponseData<{ message: string; doctype: string; days_back: number }>
  >(archiveSyncTrigger, { doctype, days_back: daysBack });

export const triggerArchiveGraphRegen = (doctypes?: string[]) =>
  request.post<ResponseData<{ message: string; doctypes: string | string[] }>>(
    archiveSyncTriggerGraph,
    { doctypes },
  );

// ==================== Connection Test APIs ====================

export interface ConnectionTestResult {
  success: boolean;
  message: string;
  status_code?: number;
}

export const testNewsConnection = (apiUrl?: string) =>
  request.post<ResponseData<ConnectionTestResult>>(api.syncTestConnection, {
    api_url: apiUrl,
  });

export const testArchiveConnection = (apiBaseUrl?: string) =>
  request.post<ResponseData<ConnectionTestResult>>(
    api.archiveSyncTestConnection,
    { api_base_url: apiBaseUrl },
  );

// ==================== KB Validation APIs ====================

export interface KbValidationResult {
  valid: boolean;
  kb_id: string;
  kb_name: string;
  doc_count: number;
  message: string;
}

// 验证新闻同步的知识库映射 (名称 + ID 双重验证)
export const validateNewsKbMapping = (
  kbName: string,
  kbId: string,
  year: string,
) =>
  request.post<ResponseData<KbValidationResult>>(api.syncValidateKb, {
    kb_name: kbName,
    kb_id: kbId,
    year,
  });

// 验证档案同步的知识库映射 (名称 + ID 双重验证，按 docclassfyname 映射)
export const validateArchiveKbMapping = (
  kbName: string,
  kbId: string,
  classfyName: string,
) =>
  request.post<ResponseData<KbValidationResult>>(api.archiveSyncValidateKb, {
    kb_name: kbName,
    kb_id: kbId,
    classfy_name: classfyName,
  });
