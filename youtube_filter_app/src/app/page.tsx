'use client';

import { useSearch } from '@/lib/context';
import SearchBar from '@/components/SearchBar';
import FilterPanel from '@/components/FilterPanel';
import VideoGrid from '@/components/VideoGrid';
import Pagination from '@/components/Pagination';
import LoadingSpinner from '@/components/LoadingSpinner';
import useYouTubeSearch from '@/lib/use-youtube-search';
import { useEffect } from 'react';

export default function Home() {
  const {
    searchQuery,
    setSearchQuery,
    filters,
    updateFilters,
    isLoading,
    results,
    pageToken,
    setPageToken,
    hasNextPage,
    hasPrevPage,
    showFilters,
    setShowFilters
  } = useSearch();
  
  const { performSearch, handleNextPage, handlePrevPage } = useYouTubeSearch();
  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery);
  };
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <div className="flex flex-col space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Find YouTube Videos</h2>
        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          handleSearch={handleSearch}
          toggleFilters={toggleFilters}
          showFilters={showFilters}
        />
        
        {showFilters && (
          <FilterPanel 
            filters={filters} 
            updateFilters={updateFilters} 
          />
        )}
      </div>
      
      {isLoading ? (
        <LoadingSpinner size="large" />
      ) : results.length > 0 ? (
        <>
          <VideoGrid videos={results} />
          <Pagination 
            pageToken={pageToken}
            setPageToken={setPageToken}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
          />
        </>
      ) : searchQuery ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No results found. Try different search terms or filters.</p>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Enter a search term to find YouTube videos.</p>
        </div>
      )}
    </div>
  );
}
