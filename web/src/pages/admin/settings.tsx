import { useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ImagePlus, LucideInfo, Trash2, Upload } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import message from '@/components/ui/message';
import {
  deleteBrandingLogo,
  getBranding,
  getBrandingLogoUrl,
  getSystemSettings,
  updateBranding,
  updateSystemSettings,
  uploadBrandingLogo,
} from '@/services/admin-service';

const AdminSettings = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  // System settings
  const { data: settings, isLoading } = useQuery({
    queryKey: ['admin/systemSettings'],
    queryFn: async () => {
      const res = await getSystemSettings();
      return res?.data?.data;
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateSystemSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin/systemSettings'] });
    },
  });

  const handleGlobalLlmToggle = (checked: boolean) => {
    updateMutation.mutate({ global_llm_enabled: checked });
  };

  // Branding
  const { data: branding, isLoading: isBrandingLoading } = useQuery({
    queryKey: ['admin/branding'],
    queryFn: async () => {
      const res = await getBranding();
      return res?.data?.data;
    },
  });

  const updateBrandingMutation = useMutation({
    mutationFn: updateBranding,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin/branding'] });
      message.success(t('admin.brandingSaved', '品牌设置已保存'));
    },
  });

  const uploadLogoMutation = useMutation({
    mutationFn: ({ type, logo }: { type: 'login' | 'home'; logo: string }) =>
      uploadBrandingLogo(type, logo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin/branding'] });
      message.success(t('admin.logoUploaded', 'Logo 已上传'));
    },
    onError: (error: any) => {
      message.error(error?.response?.data?.message || 'Upload failed');
    },
  });

  const deleteLogoMutation = useMutation({
    mutationFn: (type: 'login' | 'home') => deleteBrandingLogo(type),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin/branding'] });
      message.success(t('admin.logoDeleted', 'Logo 已恢复默认'));
    },
  });

  // Debounced text field save
  const [productName, setProductName] = useState<string | undefined>();
  const [welcomeText, setWelcomeText] = useState<string | undefined>();
  const [tagline, setTagline] = useState<string | undefined>();

  const getProductName = () => productName ?? branding?.product_name ?? '';
  const getWelcomeText = () => welcomeText ?? branding?.welcome_text ?? '';
  const getTagline = () => tagline ?? branding?.tagline ?? '';

  const handleTextSave = useCallback(
    (field: 'product_name' | 'welcome_text' | 'tagline', value: string) => {
      updateBrandingMutation.mutate({ [field]: value });
    },
    [updateBrandingMutation],
  );

  // Logo upload handlers
  const loginLogoRef = useRef<HTMLInputElement>(null);
  const homeLogoRef = useRef<HTMLInputElement>(null);

  const handleLogoFileSelect = useCallback(
    (type: 'login' | 'home', file: File) => {
      if (file.size > 2 * 1024 * 1024) {
        message.error(t('admin.logoTooLarge', 'Logo 文件不能超过 2MB'));
        return;
      }
      if (!file.type.startsWith('image/')) {
        message.error(t('admin.logoInvalidType', '请选择图片文件'));
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const dataUri = reader.result as string;
        uploadLogoMutation.mutate({ type, logo: dataUri });
      };
      reader.readAsDataURL(file);
    },
    [uploadLogoMutation, t],
  );

  if (isLoading || isBrandingLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

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

      {/* Branding Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImagePlus className="size-5" />
            {t('admin.brandingSettings', '品牌设置')}
          </CardTitle>
          <CardDescription>
            {t(
              'admin.brandingDescription',
              '自定义 Logo、产品名称、欢迎语和标语',
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Product Name */}
          <div className="space-y-2">
            <Label htmlFor="product-name">
              {t('admin.productName', '产品名称')}
            </Label>
            <div className="flex gap-2">
              <Input
                id="product-name"
                value={getProductName()}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="KM"
                className="max-w-sm"
              />
              <Button
                variant="outline"
                size="default"
                onClick={() => handleTextSave('product_name', getProductName())}
                disabled={updateBrandingMutation.isPending}
              >
                {t('admin.save', '保存')}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              {t('admin.productNameHint', '显示在登录页和导航栏的产品名称')}
            </p>
          </div>

          {/* Welcome Text */}
          <div className="space-y-2">
            <Label htmlFor="welcome-text">
              {t('admin.welcomeText', '欢迎语')}
            </Label>
            <div className="flex gap-2">
              <Input
                id="welcome-text"
                value={getWelcomeText()}
                onChange={(e) => setWelcomeText(e.target.value)}
                placeholder={t(
                  'admin.welcomeTextPlaceholder',
                  '欢迎使用知识管理平台',
                )}
                className="max-w-sm"
              />
              <Button
                variant="outline"
                size="default"
                onClick={() => handleTextSave('welcome_text', getWelcomeText())}
                disabled={updateBrandingMutation.isPending}
              >
                {t('admin.save', '保存')}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              {t('admin.welcomeTextHint', '显示在登录页标题位置')}
            </p>
          </div>

          {/* Tagline */}
          <div className="space-y-2">
            <Label htmlFor="tagline">{t('admin.tagline', '标语')}</Label>
            <div className="flex gap-2">
              <Input
                id="tagline"
                value={getTagline()}
                onChange={(e) => setTagline(e.target.value)}
                placeholder={t('admin.taglinePlaceholder', '企业级知识中心')}
                className="max-w-sm"
              />
              <Button
                variant="outline"
                size="default"
                onClick={() => handleTextSave('tagline', getTagline())}
                disabled={updateBrandingMutation.isPending}
              >
                {t('admin.save', '保存')}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              {t('admin.taglineHint', '显示在登录页副标题位置')}
            </p>
          </div>

          {/* Login Logo */}
          <div className="space-y-3 p-4 border rounded-lg">
            <div className="flex items-center gap-2">
              <Label className="text-base font-medium">
                {t('admin.loginLogo', '登录页 Logo')}
              </Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <LucideInfo className="size-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-xs">
                  <p>
                    {t(
                      'admin.loginLogoHint',
                      '建议使用方形图片，用于登录页展示。推荐尺寸：200x200px',
                    )}
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 border-2 border-dashed rounded-lg flex items-center justify-center bg-muted/30 overflow-hidden">
                {branding?.has_login_logo ? (
                  <img
                    src={getBrandingLogoUrl('login')}
                    alt="Login Logo"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <ImagePlus className="size-8 text-muted-foreground" />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  ref={loginLogoRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleLogoFileSelect('login', file);
                    e.target.value = '';
                  }}
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => loginLogoRef.current?.click()}
                  disabled={uploadLogoMutation.isPending}
                >
                  <Upload className="size-4 mr-2" />
                  {uploadLogoMutation.isPending
                    ? t('admin.uploading', '上传中...')
                    : t('admin.uploadLogo', '上传 Logo')}
                </Button>
                {branding?.has_login_logo && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteLogoMutation.mutate('login')}
                    disabled={deleteLogoMutation.isPending}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="size-4 mr-2" />
                    {t('admin.resetDefault', '恢复默认')}
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Home Logo */}
          <div className="space-y-3 p-4 border rounded-lg">
            <div className="flex items-center gap-2">
              <Label className="text-base font-medium">
                {t('admin.homeLogo', '首页 Logo')}
              </Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <LucideInfo className="size-4 text-muted-foreground cursor-help" />
                </TooltipTrigger>
                <TooltipContent side="right" className="max-w-xs">
                  <p>
                    {t(
                      'admin.homeLogoHint',
                      '用于导航栏展示的 Logo。推荐尺寸：40x40px',
                    )}
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 border-2 border-dashed rounded-lg flex items-center justify-center bg-muted/30 overflow-hidden">
                {branding?.has_home_logo ? (
                  <img
                    src={getBrandingLogoUrl('home')}
                    alt="Home Logo"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <ImagePlus className="size-8 text-muted-foreground" />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  ref={homeLogoRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleLogoFileSelect('home', file);
                    e.target.value = '';
                  }}
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => homeLogoRef.current?.click()}
                  disabled={uploadLogoMutation.isPending}
                >
                  <Upload className="size-4 mr-2" />
                  {uploadLogoMutation.isPending
                    ? t('admin.uploading', '上传中...')
                    : t('admin.uploadLogo', '上传 Logo')}
                </Button>
                {branding?.has_home_logo && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deleteLogoMutation.mutate('home')}
                    disabled={deleteLogoMutation.isPending}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="size-4 mr-2" />
                    {t('admin.resetDefault', '恢复默认')}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;
