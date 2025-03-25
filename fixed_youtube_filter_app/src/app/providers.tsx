'use client';

import { SearchProvider } from '@/lib/context';
import ErrorBoundary from '@/components/ErrorBoundary';
import { ReactNode } from 'react';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SearchProvider>
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </SearchProvider>
  );
}
