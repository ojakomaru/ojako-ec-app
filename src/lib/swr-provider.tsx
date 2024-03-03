'use client';
import { ReactNode } from 'react';
import { SWRConfig } from 'swr';
import { fetcher } from 'utils';
export const SWRProvider = ({ children }: {children: ReactNode}) => {
  return (
    <SWRConfig
      value={{
        shouldRetryOnError: false,
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
};
