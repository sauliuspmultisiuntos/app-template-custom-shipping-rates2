// src/app/client-hooks/access-token.ts

import { useSDK } from '@/app/utils/wix-sdk.client-only';
import { useSearchParams } from 'next/navigation';

export const getAccessToken = () => {
  const { dashboard } = useSDK();
  const searchParams = useSearchParams();
  
  // Use optional chaining to handle possible null value
  return searchParams?.get('accessToken')
    ? Promise.resolve(searchParams.get('accessToken'))
    : dashboard.getAccessToken?.();
};