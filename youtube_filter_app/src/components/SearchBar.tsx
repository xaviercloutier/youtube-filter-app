'use client';

import { useState } from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  toggleFilters: () => void;
  showFilters: boolean;
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  handleSearch,
  toggleFilters,
  showFilters
}: SearchBarProps) {
  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-grow relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for videos..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
            required
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
          >
            Search
          </button>
          <button
            type="button"
            onClick={toggleFilters}
            className={`border ${
              showFilters ? 'border-red-600 bg-red-50 text-red-600' : 'border-gray-300 bg-white text-gray-700'
            } font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition duration-200`}
          >
            Filters {showFilters ? '▲' : '▼'}
          </button>
        </div>
      </div>
    </form>
  );
}
