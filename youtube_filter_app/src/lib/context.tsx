'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filters: {
    type: string;
    order: string;
    videoDuration: string;
    videoDefinition: string;
    videoDimension: string;
    videoCaption: string;
    videoLicense: string;
    videoType: string;
    maxResults: number;
  };
  updateFilters: (newFilters: Partial<SearchContextType['filters']>) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  results: any[];
  setResults: (results: any[]) => void;
  pageToken: string;
  setPageToken: (token: string) => void;
  hasNextPage: boolean;
  setHasNextPage: (hasNext: boolean) => void;
  hasPrevPage: boolean;
  setHasPrevPage: (hasPrev: boolean) => void;
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    type: 'video',
    order: 'relevance',
    videoDuration: 'any',
    videoDefinition: 'any',
    videoDimension: 'any',
    videoCaption: 'any',
    videoLicense: 'any',
    videoType: 'any',
    maxResults: 12
  });
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [pageToken, setPageToken] = useState('');
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const updateFilters = (newFilters: Partial<SearchContextType['filters']>) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        filters,
        updateFilters,
        isLoading,
        setIsLoading,
        results,
        setResults,
        pageToken,
        setPageToken,
        hasNextPage,
        setHasNextPage,
        hasPrevPage,
        setHasPrevPage,
        showFilters,
        setShowFilters
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
