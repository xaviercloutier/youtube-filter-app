'use client';

import { useEffect } from 'react';
import { useSearch } from '@/lib/context';
import useYouTubeSearch from '@/lib/use-youtube-search';

export default function ErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setIsLoading, setResults } = useSearch();
  const [error, setError] = React.useState<Error | null>(null);

  useEffect(() => {
    // Add global error handler for API requests
    const handleError = (event: ErrorEvent) => {
      console.error('Global error caught:', event.error);
      setIsLoading(false);
      setError(event.error);
    };

    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, [setIsLoading]);

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 my-4">
        <h3 className="text-lg font-semibold mb-2">Something went wrong</h3>
        <p className="mb-2">We encountered an error while processing your request.</p>
        <p className="text-sm text-red-700">{error.message}</p>
        <button 
          onClick={() => setError(null)}
          className="mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
        >
          Try Again
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
