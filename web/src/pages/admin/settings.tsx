import { useTranslation } from 'react-i18next';

import message from '@/components/ui/message';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Calendar,
  Database,
  FolderArchive,
  Link2,
  LucideInfo,
  Play,
  RefreshCw,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import {
  ConnectionTestResult,
  SyncFrequency,
  getArchiveSyncConfig,
  getSyncConfig,
  getSystemSettings,
  refreshArchiveCategories,
  testArchiveConnection,
  testNewsConnection,
  triggerArchiveGraphRegen,
  triggerArchiveSync,
  triggerSync,
  updateArchiveSyncConfig,
  updateSyncConfig,
  updateSystemSettings,
  validateArchiveKbMapping,
  validateNewsKbMapping,
} from '@/services/admin-service';

const WEEKDAYS = [
  { value: 0, label: '周日' },
  { value: 1, label: '周一' },
  { value: 2, label: '周二' },
  { value: 3, label: '周三' },
  { value: 4, label: '周四' },
  { value: 5, label: '周五' },
  { value: 6, label: '周六' },
];

const MONTH_DAYS = Array.from({ length: 31 }, (_, i) => i + 1);

const AdminSettings = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [syncDate, setSyncDate] = useState('');
  const [kbName, setKbName] = useState('');
  const [kbId, setKbId] = useState(''); // 新闻同步的知识库 ID
  // 档案分类映射编辑状态：classfyName -> { name, id }
  const [categoryKbInputs, setCategoryKbInputs] = useState<
    Record<string, { name: string; id: string }>
  >({});

  const { data: settings, isLoading } = useQuery({
    queryKey: ['admin/systemSettings'],
    queryFn: async () => {
      const res = await getSystemSettings();
      return res?.data?.data;
    },
  });

  const { data: syncConfig, isLoading: isSyncLoading } = useQuery({
    queryKey: ['admin/syncConfig'],
    queryFn: async () => {
      const res = await getSyncConfig();
      return res?.data?.data;
    },
  });

  // Initialize kbName from syncConfig
  useEffect(() => {
    if (syncConfig?.current_year_kb_name) {
      setKbName(syncConfig.current_year_kb_name);
    }
  }, [syncConfig?.current_year_kb_name]);

  const updateMutation = useMutation({
    mutationFn: updateSystemSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin/systemSettings'] });
    },
  });

  const updateSyncMutation = useMutation({
    mutationFn: updateSyncConfig,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin/syncConfig'] });
      message.success('配置已保存');
    },
    onError: (error: any) => {
      const msg =
        error?.response?.data?.message || error?.message || '保存失败';
      message.error(msg);
    },
  });

  const triggerSyncMutation = useMutation({
    mutationFn: (date?: string) => triggerSync(date),
    onSuccess: (res) => {
      const msg =
        res?.data?.data?.message || res?.data?.message || '同步任务已启动';
      message.success(msg);
      queryClient.invalidateQueries({ queryKey: ['admin/syncConfig'] });
    },
    onError: (error: any) => {
      const msg =
        error?.response?.data?.message || error?.message || '同步失败';
      message.error(msg);
    },
  });

  // Archive Sync Queries and Mutations
  const { data: archiveConfig, isLoading: isArchiveLoading } = useQuery({
    queryKey: ['admin/archiveSyncConfig'],
    queryFn: async () => {
      const res = await getArchiveSyncConfig();
      return res?.data?.data;
    },
  });

  const updateArchiveMutation = useMutation({
    mutationFn: updateArchiveSyncConfig,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin/archiveSyncConfig'] });
    },
  });

  const refreshCategoriesMutation = useMutation({
    mutationFn: refreshArchiveCategories,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin/archiveSyncConfig'] });
    },
  });

  const triggerArchiveSyncMutation = useMutation({
    mutationFn: ({
      doctype,
      daysBack,
    }: {
      doctype?: string;
      daysBack?: number;
    }) => triggerArchiveSync(doctype, daysBack),
    onSuccess: (res) => {
      const msg =
        res?.data?.data?.message || res?.data?.message || '档案同步任务已启动';
      message.success(msg);
      queryClient.invalidateQueries({ queryKey: ['admin/archiveSyncConfig'] });
    },
    onError: (error: any) => {
      const msg =
        error?.response?.data?.message || error?.message || '档案同步失败';
      message.error(msg);
    },
  });

  const triggerArchiveGraphMutation = useMutation({
    mutationFn: (doctypes?: string[]) => triggerArchiveGraphRegen(doctypes),
    onSuccess: (res) => {
      const msg =
        res?.data?.data?.message || res?.data?.message || '图谱重建任务已启动';
      message.success(msg);
    },
    onError: (error: any) => {
      const msg =
        error?.response?.data?.message || error?.message || '图谱重建失败';
      message.error(msg);
    },
  });

  // Connection test mutations
  const [newsConnectionStatus, setNewsConnectionStatus] =
    useState<ConnectionTestResult | null>(null);
  const [archiveConnectionStatus, setArchiveConnectionStatus] =
    useState<ConnectionTestResult | null>(null);

  const testNewsConnectionMutation = useMutation({
    mutationFn: (apiUrl?: string) => testNewsConnection(apiUrl),
    onSuccess: (res) => {
      setNewsConnectionStatus(res?.data?.data || null);
    },
    onError: (error: any) => {
      setNewsConnectionStatus({
        success: false,
        message: error?.message || '测试失败',
      });
    },
  });

  const testArchiveConnectionMutation = useMutation({
    mutationFn: (apiBaseUrl?: string) => testArchiveConnection(apiBaseUrl),
    onSuccess: (res) => {
      setArchiveConnectionStatus(res?.data?.data || null);
    },
    onError: (error: any) => {
      setArchiveConnectionStatus({
        success: false,
        message: error?.message || '测试失败',
      });
    },
  });

  // KB validation mutations - 名称 + ID 双重验证
  const validateNewsKbMutation = useMutation({
    mutationFn: ({
      kbName,
      kbId,
      year,
    }: {
      kbName: string;
      kbId: string;
      year: string;
    }) => validateNewsKbMapping(kbName, kbId, year),
    onSuccess: (res) => {
      if (res?.data?.data?.valid) {
        message.success(res?.data?.data?.message || '映射成功');
        queryClient.invalidateQueries({ queryKey: ['admin/syncConfig'] });
      } else {
        message.error(res?.data?.message || '映射失败');
      }
    },
    onError: (error: any) => {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        '映射失败：未找到该知识库';
      message.error(msg);
    },
  });

  const validateArchiveKbMutation = useMutation({
    mutationFn: ({
      kbName,
      kbId,
      classfyName,
    }: {
      kbName: string;
      kbId: string;
      classfyName: string;
    }) => validateArchiveKbMapping(kbName, kbId, classfyName),
    onSuccess: (res) => {
      if (res?.data?.data?.valid) {
        message.success(res?.data?.data?.message || '映射成功');
        queryClient.invalidateQueries({
          queryKey: ['admin/archiveSyncConfig'],
        });
      } else {
        message.error(res?.data?.message || '映射失败');
      }
    },
    onError: (error: any) => {
      const msg =
        error?.response?.data?.message ||
        error?.message ||
        '映射失败：未找到该知识库';
      message.error(msg);
    },
  });

  const handleGlobalLlmToggle = (checked: boolean) => {
    updateMutation.mutate({ global_llm_enabled: checked });
  };

  const handleSyncEnabledToggle = (checked: boolean) => {
    updateSyncMutation.mutate({ enabled: checked });
  };

  const handleSyncTimeChange = (value: string) => {
    updateSyncMutation.mutate({ sync_time: value });
  };

  const handleGraphRegenTimeChange = (value: string) => {
    updateSyncMutation.mutate({ graph_regen_time: value });
  };

  // News sync frequency handlers
  const handleFrequencyChange = (value: SyncFrequency) => {
    updateSyncMutation.mutate({ sync_frequency: value });
  };

  const handleWeeklyDaysChange = (day: number, checked: boolean) => {
    const currentDays = syncConfig?.weekly_days || [1];
    const newDays = checked
      ? [...currentDays, day].sort((a, b) => a - b)
      : currentDays.filter((d) => d !== day);
    if (newDays.length > 0) {
      updateSyncMutation.mutate({ weekly_days: newDays });
    }
  };

  const handleMonthlyDaysChange = (day: number, checked: boolean) => {
    const currentDays = syncConfig?.monthly_days || [1];
    const newDays = checked
      ? [...currentDays, day].sort((a, b) => a - b)
      : currentDays.filter((d) => d !== day);
    if (newDays.length > 0) {
      updateSyncMutation.mutate({ monthly_days: newDays });
    }
  };

  // Graph rebuild frequency handlers
  const handleGraphFrequencyChange = (value: SyncFrequency) => {
    updateSyncMutation.mutate({ graph_regen_frequency: value });
  };

  const handleGraphWeeklyDaysChange = (day: number, checked: boolean) => {
    const currentDays = syncConfig?.graph_regen_weekly_days || [0];
    const newDays = checked
      ? [...currentDays, day].sort((a, b) => a - b)
      : currentDays.filter((d) => d !== day);
    if (newDays.length > 0) {
      updateSyncMutation.mutate({ graph_regen_weekly_days: newDays });
    }
  };

  const handleGraphMonthlyDaysChange = (day: number, checked: boolean) => {
    const currentDays = syncConfig?.graph_regen_monthly_days || [1];
    const newDays = checked
      ? [...currentDays, day].sort((a, b) => a - b)
      : currentDays.filter((d) => d !== day);
    if (newDays.length > 0) {
      updateSyncMutation.mutate({ graph_regen_monthly_days: newDays });
    }
  };

  const handleValidateNewsKb = () => {
    if (kbName && kbId && syncConfig?.current_year) {
      validateNewsKbMutation.mutate({
        kbName,
        kbId,
        year: syncConfig.current_year,
      });
    }
  };

  const handleTriggerSync = () => {
    triggerSyncMutation.mutate(syncDate || undefined);
  };

  // Archive sync handlers
  const handleArchiveEnabledToggle = (checked: boolean) => {
    updateArchiveMutation.mutate({ enabled: checked });
  };

  const handleArchiveSyncTimeChange = (value: string) => {
    updateArchiveMutation.mutate({ sync_time: value });
  };

  const handleArchiveGraphRegenTimeChange = (value: string) => {
    updateArchiveMutation.mutate({ graph_regen_time: value });
  };

  const handleArchiveFrequencyChange = (value: SyncFrequency) => {
    updateArchiveMutation.mutate({ sync_frequency: value });
  };

  const handleArchiveWeeklyDaysChange = (day: number, checked: boolean) => {
    const currentDays = archiveConfig?.weekly_days || [1];
    const newDays = checked
      ? [...currentDays, day].sort((a, b) => a - b)
      : currentDays.filter((d) => d !== day);
    if (newDays.length > 0) {
      updateArchiveMutation.mutate({ weekly_days: newDays });
    }
  };

  const handleArchiveMonthlyDaysChange = (day: number, checked: boolean) => {
    const currentDays = archiveConfig?.monthly_days || [1];
    const newDays = checked
      ? [...currentDays, day].sort((a, b) => a - b)
      : currentDays.filter((d) => d !== day);
    if (newDays.length > 0) {
      updateArchiveMutation.mutate({ monthly_days: newDays });
    }
  };

  const handleArchiveGraphFrequencyChange = (value: SyncFrequency) => {
    updateArchiveMutation.mutate({ graph_regen_frequency: value });
  };

  const handleArchiveGraphWeeklyDaysChange = (
    day: number,
    checked: boolean,
  ) => {
    const currentDays = archiveConfig?.graph_regen_weekly_days || [0];
    const newDays = checked
      ? [...currentDays, day].sort((a, b) => a - b)
      : currentDays.filter((d) => d !== day);
    if (newDays.length > 0) {
      updateArchiveMutation.mutate({ graph_regen_weekly_days: newDays });
    }
  };

  const handleArchiveGraphMonthlyDaysChange = (
    day: number,
    checked: boolean,
  ) => {
    const currentDays = archiveConfig?.graph_regen_monthly_days || [1];
    const newDays = checked
      ? [...currentDays, day].sort((a, b) => a - b)
      : currentDays.filter((d) => d !== day);
    if (newDays.length > 0) {
      updateArchiveMutation.mutate({ graph_regen_monthly_days: newDays });
    }
  };

  // 更新档案分类映射输入 (临时状态) - 名称
  const handleCategoryKbNameChange = (classfyName: string, name: string) => {
    setCategoryKbInputs((prev) => ({
      ...prev,
      [classfyName]: {
        ...prev[classfyName],
        name,
        id: prev[classfyName]?.id || '',
      },
    }));
  };

  // 更新档案分类映射输入 (临时状态) - ID
  const handleCategoryKbIdChange = (classfyName: string, id: string) => {
    setCategoryKbInputs((prev) => ({
      ...prev,
      [classfyName]: {
        ...prev[classfyName],
        id,
        name: prev[classfyName]?.name || '',
      },
    }));
  };

  // 确认档案分类映射 (调用验证 API) - 同时传入名称和 ID
  const handleValidateArchiveKb = (classfyName: string) => {
    const input = categoryKbInputs[classfyName];
    if (input?.name && input?.id) {
      validateArchiveKbMutation.mutate({
        kbName: input.name,
        kbId: input.id,
        classfyName,
      });
    }
  };

  const handleRefreshCategories = () => {
    refreshCategoriesMutation.mutate();
  };

  const handleTriggerArchiveSync = (doctype?: string) => {
    triggerArchiveSyncMutation.mutate({ doctype, daysBack: 7 });
  };

  const handleTriggerArchiveGraph = (doctype?: string) => {
    triggerArchiveGraphMutation.mutate(doctype ? [doctype] : undefined);
  };

  if (isLoading || isSyncLoading || isArchiveLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // News sync frequency
  const syncFrequency = syncConfig?.sync_frequency || 'daily';
  const weeklyDays = syncConfig?.weekly_days || [1];
  const monthlyDays = syncConfig?.monthly_days || [1];
  // Graph rebuild frequency
  const graphFrequency = syncConfig?.graph_regen_frequency || 'weekly';
  const graphWeeklyDays = syncConfig?.graph_regen_weekly_days || [0];
  const graphMonthlyDays = syncConfig?.graph_regen_monthly_days || [1];

  // Archive sync frequency
  const archiveSyncFrequency = archiveConfig?.sync_frequency || 'weekly';
  const archiveWeeklyDays = archiveConfig?.weekly_days || [1];
  const archiveMonthlyDays = archiveConfig?.monthly_days || [1];
  // Archive graph rebuild frequency
  const archiveGraphFrequency =
    archiveConfig?.graph_regen_frequency || 'monthly';
  const archiveGraphWeeklyDays = archiveConfig?.graph_regen_weekly_days || [0];
  const archiveGraphMonthlyDays = archiveConfig?.graph_regen_monthly_days || [
    1,
  ];
  // Archive categories
  const archiveCategories = archiveConfig?.categories || [];
  const categoryMapping = archiveConfig?.category_mapping || {}; // code -> kb_id (由后端自动填充)
  const categoryNameMapping = archiveConfig?.category_name_mapping || {}; // code -> kb_name (用户配置)

  return (
    <div className="space-y-6 h-full overflow-auto p-1">
      {/* System Settings Card */}
      <Card>
        <CardHeader>
          <CardTitle>{t('admin.systemSettings', '系统设置')}</CardTitle>
          <CardDescription>
            {t('admin.systemSettingsDescription', '管理系统级别的配置选项')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Global LLM Switch */}
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Label
                    htmlFor="global-llm-switch"
                    className="text-base font-medium"
                  >
                    {t('admin.globalLlmEnabled', '全局 LLM 设置')}
                  </Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <LucideInfo className="size-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent side="right" className="max-w-xs">
                      <p>
                        {t(
                          'admin.globalLlmEnabledTip',
                          '启用后，所有用户将使用全局配置的 LLM 模型',
                        )}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-sm text-muted-foreground">
                  {settings?.global_llm_enabled
                    ? t('admin.globalLlmEnabledDesc', '当前已启用全局 LLM 配置')
                    : t(
                        'admin.globalLlmDisabledDesc',
                        '当前使用用户自定义 LLM 配置',
                      )}
                </p>
              </div>
            </div>
            <Switch
              id="global-llm-switch"
              checked={settings?.global_llm_enabled ?? true}
              onCheckedChange={handleGlobalLlmToggle}
              disabled={updateMutation.isPending}
            />
          </div>
        </CardContent>
      </Card>

      {/* News Sync Settings Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="size-5" />
            新闻同步设置 (News Sync)
          </CardTitle>
          <CardDescription>
            配置国贸 OA 新闻自动同步到 RAGFlow 知识库
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Current Year Status Banner */}
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Database className="size-5 text-primary" />
                <div>
                  <p className="font-medium">
                    当前同步年份:{' '}
                    <Badge variant="secondary">
                      {syncConfig?.current_year}
                    </Badge>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    正在同步 {syncConfig?.current_year} 年的新闻数据
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">
                  {syncConfig?.sync_count || 0}
                </p>
                <p className="text-xs text-muted-foreground">条新闻</p>
              </div>
            </div>
          </div>

          {/* Sync Enabled Switch */}
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Label
                    htmlFor="sync-enabled-switch"
                    className="text-base font-medium"
                  >
                    自动同步开关
                  </Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <LucideInfo className="size-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent side="right" className="max-w-xs">
                      <p>启用后，系统将按设定频率自动从国贸 OA 拉取新闻</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <p className="text-sm text-muted-foreground">
                  {syncConfig?.enabled ? '自动同步已启用' : '自动同步已禁用'}
                </p>
              </div>
            </div>
            <Switch
              id="sync-enabled-switch"
              checked={syncConfig?.enabled ?? false}
              onCheckedChange={handleSyncEnabledToggle}
              disabled={updateSyncMutation.isPending}
            />
          </div>

          {/* Module 1: News Sync Settings */}
          <div className="space-y-4 p-4 border rounded-lg bg-blue-50/50 dark:bg-blue-950/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <Label className="text-base font-medium">新闻同步设置</Label>
            </div>
            <p className="text-sm text-muted-foreground">
              配置从 OA 系统拉取新闻的频率和时间
            </p>

            {/* API URL Configuration */}
            <div className="space-y-2">
              <Label htmlFor="news-api-url">OA 系统 API 地址</Label>
              <div className="flex gap-2">
                <Input
                  id="news-api-url"
                  type="url"
                  defaultValue={syncConfig?.api_url || ''}
                  onBlur={(e) =>
                    updateSyncMutation.mutate({ api_url: e.target.value })
                  }
                  placeholder="http://oa.itg.cn/api/..."
                  className="flex-1"
                  disabled={updateSyncMutation.isPending}
                />
                <Button
                  onClick={() =>
                    testNewsConnectionMutation.mutate(syncConfig?.api_url)
                  }
                  disabled={testNewsConnectionMutation.isPending}
                  variant="outline"
                  size="default"
                >
                  <Link2 className="size-4 mr-2" />
                  {testNewsConnectionMutation.isPending
                    ? '测试中...'
                    : '测试连接'}
                </Button>
              </div>
              {newsConnectionStatus && (
                <p
                  className={`text-sm ${newsConnectionStatus.success ? 'text-green-600' : 'text-red-600'}`}
                >
                  {newsConnectionStatus.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sync-frequency">同步周期</Label>
                <Select
                  value={syncFrequency}
                  onValueChange={(v) =>
                    handleFrequencyChange(v as SyncFrequency)
                  }
                  disabled={updateSyncMutation.isPending}
                >
                  <SelectTrigger id="sync-frequency">
                    <SelectValue placeholder="选择周期" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">每天</SelectItem>
                    <SelectItem value="weekly">每周</SelectItem>
                    <SelectItem value="monthly">每月</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sync-time">同步时间</Label>
                <Input
                  id="sync-time"
                  type="time"
                  value={syncConfig?.sync_time || '02:00'}
                  onChange={(e) => handleSyncTimeChange(e.target.value)}
                  disabled={updateSyncMutation.isPending}
                />
              </div>
            </div>

            {syncFrequency === 'weekly' && (
              <div className="space-y-2">
                <Label>选择同步日 (每周)</Label>
                <div className="flex flex-wrap gap-2">
                  {WEEKDAYS.map((day) => (
                    <div
                      key={day.value}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`weekday-${day.value}`}
                        checked={weeklyDays.includes(day.value)}
                        onCheckedChange={(checked) =>
                          handleWeeklyDaysChange(day.value, checked as boolean)
                        }
                        disabled={updateSyncMutation.isPending}
                      />
                      <label
                        htmlFor={`weekday-${day.value}`}
                        className="text-sm cursor-pointer"
                      >
                        {day.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {syncFrequency === 'monthly' && (
              <div className="space-y-2">
                <Label>选择同步日 (每月几号)</Label>
                <div className="flex flex-wrap gap-1">
                  {MONTH_DAYS.map((day) => (
                    <Button
                      key={day}
                      variant={
                        monthlyDays.includes(day) ? 'default' : 'outline'
                      }
                      size="sm"
                      className="w-9 h-9 p-0"
                      onClick={() =>
                        handleMonthlyDaysChange(day, !monthlyDays.includes(day))
                      }
                      disabled={updateSyncMutation.isPending}
                    >
                      {day}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Module 2: Graph Rebuild Settings */}
          <div className="space-y-4 p-4 border rounded-lg bg-orange-50/50 dark:bg-orange-950/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <Label className="text-base font-medium">图谱重建设置</Label>
              <Badge variant="secondary" className="text-xs">
                资源密集型
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              图谱重建为全量操作，消耗大量时间和模型资源，建议设置较低频率
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="graph-frequency">重建周期</Label>
                <Select
                  value={graphFrequency}
                  onValueChange={(v) =>
                    handleGraphFrequencyChange(v as SyncFrequency)
                  }
                  disabled={updateSyncMutation.isPending}
                >
                  <SelectTrigger id="graph-frequency">
                    <SelectValue placeholder="选择周期" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">每天</SelectItem>
                    <SelectItem value="weekly">每周</SelectItem>
                    <SelectItem value="monthly">每月</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="graph-regen-time">重建时间</Label>
                <Input
                  id="graph-regen-time"
                  type="time"
                  value={syncConfig?.graph_regen_time || '04:00'}
                  onChange={(e) => handleGraphRegenTimeChange(e.target.value)}
                  disabled={updateSyncMutation.isPending}
                />
              </div>
            </div>

            {graphFrequency === 'weekly' && (
              <div className="space-y-2">
                <Label>选择重建日 (每周)</Label>
                <div className="flex flex-wrap gap-2">
                  {WEEKDAYS.map((day) => (
                    <div
                      key={day.value}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`graph-weekday-${day.value}`}
                        checked={graphWeeklyDays.includes(day.value)}
                        onCheckedChange={(checked) =>
                          handleGraphWeeklyDaysChange(
                            day.value,
                            checked as boolean,
                          )
                        }
                        disabled={updateSyncMutation.isPending}
                      />
                      <label
                        htmlFor={`graph-weekday-${day.value}`}
                        className="text-sm cursor-pointer"
                      >
                        {day.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {graphFrequency === 'monthly' && (
              <div className="space-y-2">
                <Label>选择重建日 (每月几号)</Label>
                <div className="flex flex-wrap gap-1">
                  {MONTH_DAYS.map((day) => (
                    <Button
                      key={day}
                      variant={
                        graphMonthlyDays.includes(day) ? 'default' : 'outline'
                      }
                      size="sm"
                      className="w-9 h-9 p-0"
                      onClick={() =>
                        handleGraphMonthlyDaysChange(
                          day,
                          !graphMonthlyDays.includes(day),
                        )
                      }
                      disabled={updateSyncMutation.isPending}
                    >
                      {day}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Current Year KB Configuration */}
          <div className="space-y-3 p-4 border rounded-lg">
            <div className="flex items-center gap-2">
              <Label className="text-base font-medium">
                {syncConfig?.current_year} 年知识库配置
              </Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <LucideInfo className="size-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-xs">
                  <p>
                    设置当前年份新闻存储的知识库名称。跨年时会自动创建新知识库。
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex gap-2">
              <Input
                value={kbName}
                onChange={(e) => setKbName(e.target.value)}
                placeholder="知识库名称"
                className="flex-1"
              />
              <Input
                value={kbId}
                onChange={(e) => setKbId(e.target.value)}
                placeholder="知识库 ID"
                className="flex-1"
              />
              <Button
                onClick={handleValidateNewsKb}
                disabled={validateNewsKbMutation.isPending || !kbName || !kbId}
                variant="outline"
              >
                {validateNewsKbMutation.isPending ? '验证中...' : '确认映射'}
              </Button>
            </div>
            {syncConfig?.current_year_kb_id && (
              <p className="text-xs text-green-600">
                ✓ 已映射: {syncConfig.current_year_kb_name} (ID:{' '}
                {syncConfig.current_year_kb_id})
              </p>
            )}
          </div>

          {/* Status Info */}
          <div className="p-4 bg-muted rounded-lg space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">上次同步日期:</span>
              <span className="font-medium">
                {syncConfig?.last_sync_date || '从未'}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">已配置年份:</span>
              <span className="font-medium">
                {Object.keys(syncConfig?.kb_mapping || {}).join(', ') || '无'}
              </span>
            </div>
          </div>

          {/* Manual Actions */}
          <div className="space-y-2">
            <Label htmlFor="sync-date">指定日期同步 (可选)</Label>
            <div className="flex gap-2">
              <Input
                id="sync-date"
                type="date"
                value={syncDate}
                onChange={(e) => setSyncDate(e.target.value)}
                placeholder="YYYY-MM-DD"
              />
              <Button
                onClick={handleTriggerSync}
                disabled={triggerSyncMutation.isPending}
                variant="outline"
              >
                <Play className="size-4 mr-2" />
                {triggerSyncMutation.isPending ? '同步中...' : '立即同步'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Archive Sync Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2">
                <FolderArchive className="size-5" />
                档案同步设置
              </CardTitle>
              <CardDescription>配置从档案系统同步文档到知识库</CardDescription>
            </div>
            <Switch
              checked={archiveConfig?.enabled || false}
              onCheckedChange={handleArchiveEnabledToggle}
              disabled={updateArchiveMutation.isPending}
            />
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Module 1: Archive Sync Settings */}
          <div className="space-y-4 p-4 border rounded-lg bg-teal-50/50 dark:bg-teal-950/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-500" />
              <Label className="text-base font-medium">档案同步设置</Label>
            </div>
            <p className="text-sm text-muted-foreground">
              配置从档案系统拉取文档的频率和时间
            </p>

            {/* API URL Configuration */}
            <div className="space-y-2">
              <Label htmlFor="archive-api-url">档案系统 API 地址</Label>
              <div className="flex gap-2">
                <Input
                  id="archive-api-url"
                  type="url"
                  defaultValue={archiveConfig?.api_base_url || ''}
                  onBlur={(e) =>
                    updateArchiveMutation.mutate({
                      api_base_url: e.target.value,
                    })
                  }
                  placeholder="http://das-dev.itg.cn"
                  className="flex-1"
                  disabled={updateArchiveMutation.isPending}
                />
                <Button
                  onClick={() =>
                    testArchiveConnectionMutation.mutate(
                      archiveConfig?.api_base_url,
                    )
                  }
                  disabled={testArchiveConnectionMutation.isPending}
                  variant="outline"
                  size="default"
                >
                  <Link2 className="size-4 mr-2" />
                  {testArchiveConnectionMutation.isPending
                    ? '测试中...'
                    : '测试连接'}
                </Button>
              </div>
              {archiveConnectionStatus && (
                <p
                  className={`text-sm ${archiveConnectionStatus.success ? 'text-green-600' : 'text-red-600'}`}
                >
                  {archiveConnectionStatus.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="archive-sync-frequency">同步周期</Label>
                <Select
                  value={archiveSyncFrequency}
                  onValueChange={(v) =>
                    handleArchiveFrequencyChange(v as SyncFrequency)
                  }
                  disabled={updateArchiveMutation.isPending}
                >
                  <SelectTrigger id="archive-sync-frequency">
                    <SelectValue placeholder="选择周期" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">每天</SelectItem>
                    <SelectItem value="weekly">每周</SelectItem>
                    <SelectItem value="monthly">每月</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="archive-sync-time">同步时间</Label>
                <Input
                  id="archive-sync-time"
                  type="time"
                  value={archiveConfig?.sync_time || '03:00'}
                  onChange={(e) => handleArchiveSyncTimeChange(e.target.value)}
                  disabled={updateArchiveMutation.isPending}
                />
              </div>
            </div>

            {archiveSyncFrequency === 'weekly' && (
              <div className="space-y-2">
                <Label>选择同步日 (每周)</Label>
                <div className="flex flex-wrap gap-2">
                  {WEEKDAYS.map((day) => (
                    <div
                      key={day.value}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`archive-weekday-${day.value}`}
                        checked={archiveWeeklyDays.includes(day.value)}
                        onCheckedChange={(checked) =>
                          handleArchiveWeeklyDaysChange(
                            day.value,
                            checked as boolean,
                          )
                        }
                        disabled={updateArchiveMutation.isPending}
                      />
                      <label
                        htmlFor={`archive-weekday-${day.value}`}
                        className="text-sm cursor-pointer"
                      >
                        {day.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {archiveSyncFrequency === 'monthly' && (
              <div className="space-y-2">
                <Label>选择同步日 (每月几号)</Label>
                <div className="flex flex-wrap gap-1">
                  {MONTH_DAYS.map((day) => (
                    <Button
                      key={day}
                      variant={
                        archiveMonthlyDays.includes(day) ? 'default' : 'outline'
                      }
                      size="sm"
                      className="w-9 h-9 p-0"
                      onClick={() =>
                        handleArchiveMonthlyDaysChange(
                          day,
                          !archiveMonthlyDays.includes(day),
                        )
                      }
                      disabled={updateArchiveMutation.isPending}
                    >
                      {day}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Module 2: Archive Graph Rebuild Settings */}
          <div className="space-y-4 p-4 border rounded-lg bg-purple-50/50 dark:bg-purple-950/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <Label className="text-base font-medium">档案图谱重建设置</Label>
              <Badge variant="secondary" className="text-xs">
                资源密集型
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              档案图谱重建为全量操作，建议设置较低频率
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="archive-graph-frequency">重建周期</Label>
                <Select
                  value={archiveGraphFrequency}
                  onValueChange={(v) =>
                    handleArchiveGraphFrequencyChange(v as SyncFrequency)
                  }
                  disabled={updateArchiveMutation.isPending}
                >
                  <SelectTrigger id="archive-graph-frequency">
                    <SelectValue placeholder="选择周期" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">每天</SelectItem>
                    <SelectItem value="weekly">每周</SelectItem>
                    <SelectItem value="monthly">每月</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="archive-graph-regen-time">重建时间</Label>
                <Input
                  id="archive-graph-regen-time"
                  type="time"
                  value={archiveConfig?.graph_regen_time || '05:00'}
                  onChange={(e) =>
                    handleArchiveGraphRegenTimeChange(e.target.value)
                  }
                  disabled={updateArchiveMutation.isPending}
                />
              </div>
            </div>

            {archiveGraphFrequency === 'weekly' && (
              <div className="space-y-2">
                <Label>选择重建日 (每周)</Label>
                <div className="flex flex-wrap gap-2">
                  {WEEKDAYS.map((day) => (
                    <div
                      key={day.value}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`archive-graph-weekday-${day.value}`}
                        checked={archiveGraphWeeklyDays.includes(day.value)}
                        onCheckedChange={(checked) =>
                          handleArchiveGraphWeeklyDaysChange(
                            day.value,
                            checked as boolean,
                          )
                        }
                        disabled={updateArchiveMutation.isPending}
                      />
                      <label
                        htmlFor={`archive-graph-weekday-${day.value}`}
                        className="text-sm cursor-pointer"
                      >
                        {day.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {archiveGraphFrequency === 'monthly' && (
              <div className="space-y-2">
                <Label>选择重建日 (每月几号)</Label>
                <div className="flex flex-wrap gap-1">
                  {MONTH_DAYS.map((day) => (
                    <Button
                      key={day}
                      variant={
                        archiveGraphMonthlyDays.includes(day)
                          ? 'default'
                          : 'outline'
                      }
                      size="sm"
                      className="w-9 h-9 p-0"
                      onClick={() =>
                        handleArchiveGraphMonthlyDaysChange(
                          day,
                          !archiveGraphMonthlyDays.includes(day),
                        )
                      }
                      disabled={updateArchiveMutation.isPending}
                    >
                      {day}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Category Mapping Section */}
          <div className="space-y-4 p-4 border rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link2 className="size-4" />
                <Label className="text-base font-medium">分类映射配置</Label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <LucideInfo className="size-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent side="right" className="max-w-xs">
                    <p>
                      将档案系统的文档分类映射到RAGFlow知识库。每个分类可以同步到一个独立的知识库。
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefreshCategories}
                disabled={refreshCategoriesMutation.isPending}
              >
                <RefreshCw
                  className={`size-4 mr-2 ${refreshCategoriesMutation.isPending ? 'animate-spin' : ''}`}
                />
                {refreshCategoriesMutation.isPending ? '刷新中...' : '刷新分类'}
              </Button>
            </div>

            {archiveCategories.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <FolderArchive className="size-12 mx-auto mb-2 opacity-50" />
                <p>暂无分类数据</p>
                <p className="text-sm">点击"刷新分类"从档案系统获取</p>
              </div>
            ) : (
              <div className="space-y-3">
                {archiveCategories.map((category) => {
                  // 使用 category.name (对应 docclassfyname) 作为映射 key
                  const classfyName = category.name;
                  const mappedKbName = categoryNameMapping[classfyName];
                  const mappedKbId = categoryMapping[classfyName];
                  const inputName =
                    categoryKbInputs[classfyName]?.name ?? mappedKbName ?? '';
                  const inputId =
                    categoryKbInputs[classfyName]?.id ?? mappedKbId ?? '';

                  return (
                    <div
                      key={category.code}
                      className="flex items-center justify-between p-3 border rounded-lg bg-muted/30"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{category.code}</Badge>
                          <span className="font-medium">{category.name}</span>
                        </div>
                        {category.desc && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {category.desc}
                          </p>
                        )}
                        {mappedKbId && (
                          <p className="text-xs text-green-600 mt-1">
                            ✓ 已映射: {mappedKbName} (ID: {mappedKbId})
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Input
                          placeholder="知识库名称"
                          value={inputName}
                          onChange={(e) =>
                            handleCategoryKbNameChange(
                              classfyName,
                              e.target.value,
                            )
                          }
                          className="w-36"
                          disabled={validateArchiveKbMutation.isPending}
                        />
                        <Input
                          placeholder="知识库 ID"
                          value={inputId}
                          onChange={(e) =>
                            handleCategoryKbIdChange(
                              classfyName,
                              e.target.value,
                            )
                          }
                          className="w-36"
                          disabled={validateArchiveKbMutation.isPending}
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleValidateArchiveKb(classfyName)}
                          disabled={
                            validateArchiveKbMutation.isPending ||
                            !inputName ||
                            !inputId
                          }
                          title="确认映射"
                        >
                          {validateArchiveKbMutation.isPending ? '...' : '确认'}
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleTriggerArchiveSync(category.code)
                          }
                          disabled={
                            triggerArchiveSyncMutation.isPending || !mappedKbId
                          }
                          title="同步此分类"
                        >
                          <Play className="size-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleTriggerArchiveGraph(category.code)
                          }
                          disabled={
                            triggerArchiveGraphMutation.isPending || !mappedKbId
                          }
                          title="重建此分类图谱"
                        >
                          <Database className="size-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Status Info */}
          <div className="p-4 bg-muted rounded-lg space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">上次同步时间:</span>
              <span className="font-medium">
                {archiveConfig?.last_sync_time || '从未'}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">已配置分类:</span>
              <span className="font-medium">
                {
                  Object.keys(categoryNameMapping).filter(
                    (k) => categoryNameMapping[k],
                  ).length
                }{' '}
                / {archiveCategories.length}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">已同步文档:</span>
              <span className="font-medium">
                {archiveConfig?.total_synced || 0}
              </span>
            </div>
          </div>

          {/* Bulk Actions */}
          <div className="flex gap-2">
            <Button
              onClick={() => handleTriggerArchiveSync()}
              disabled={
                triggerArchiveSyncMutation.isPending ||
                Object.keys(categoryNameMapping).filter(
                  (k) => categoryNameMapping[k],
                ).length === 0
              }
              variant="outline"
            >
              <Play className="size-4 mr-2" />
              {triggerArchiveSyncMutation.isPending
                ? '同步中...'
                : '同步所有分类'}
            </Button>
            <Button
              onClick={() => handleTriggerArchiveGraph()}
              disabled={
                triggerArchiveGraphMutation.isPending ||
                Object.keys(categoryNameMapping).filter(
                  (k) => categoryNameMapping[k],
                ).length === 0
              }
              variant="outline"
            >
              <Database className="size-4 mr-2" />
              {triggerArchiveGraphMutation.isPending
                ? '重建中...'
                : '重建所有图谱'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;
