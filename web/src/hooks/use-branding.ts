// KM-CUSTOM: Branding hook for dynamic logo and text
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import {
  getBranding,
  getBrandingLogoUrl,
  type BrandingConfig,
} from '@/services/admin-service';

export interface Branding {
  productName: string;
  welcomeText: string;
  tagline: string;
  loginLogoUrl: string;
  homeLogoUrl: string;
}

const DEFAULT_LOGO = '/logo.svg';
const DEFAULT_PRODUCT_NAME = 'KM';

export function useBranding(): { branding: Branding; isLoading: boolean } {
  const { data, isLoading } = useQuery<BrandingConfig | undefined>({
    queryKey: ['branding'],
    queryFn: async (): Promise<BrandingConfig | undefined> => {
      const res = await getBranding();
      return (res?.data as { data?: BrandingConfig })?.data;
    },
    staleTime: 5 * 60 * 1000, // cache 5 minutes
    retry: 1,
  });

  const branding: Branding = {
    productName: data?.product_name || DEFAULT_PRODUCT_NAME,
    welcomeText: data?.welcome_text || '',
    tagline: data?.tagline || '',
    loginLogoUrl: data?.has_login_logo
      ? getBrandingLogoUrl('login')
      : DEFAULT_LOGO,
    homeLogoUrl: data?.has_home_logo
      ? getBrandingLogoUrl('home')
      : DEFAULT_LOGO,
  };

  useEffect(() => {
    document.title = branding.productName;
    const link = document.querySelector<HTMLLinkElement>("link[rel*='icon']");
    if (link) {
      link.href = branding.loginLogoUrl;
    }
  }, [branding.productName, branding.loginLogoUrl]);

  return { branding, isLoading };
}
