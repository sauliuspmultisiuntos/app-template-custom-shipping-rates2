'use client';
import { dashboard, SDK } from '@wix/dashboard';
import { useMemo } from 'react';
import { createClient } from '@wix/sdk/client';

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

export const useSDK = () => {
  // Extract complex dependency
  const isWindowDefined = typeof window !== 'undefined';

  const sdk = useMemo(
    () =>
      !isWindowDefined || !inIframe()
        ? {
            // The SDK is not initialized during server-side rendering or outside an iframe, making SDK methods unusable in these contexts.
            dashboard: {} as SDK,
          }
        : createClient({
            host: dashboard.host(),
            auth: dashboard.auth(),
            modules: {
              dashboard,
            },
          }),
    [isWindowDefined], // Updated dependency array
  );
  
  return sdk;
};
