'use client';

interface PaginationProps {
  pageToken: string;
  setPageToken: (token: string) => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export default function Pagination({ 
  pageToken, 
  setPageToken, 
  hasNextPage, 
  hasPrevPage 
}: PaginationProps) {
  return (
    <div className="flex justify-center mt-6">
      <div className="flex space-x-2">
        <button
          onClick={() => setPageToken('')}
          disabled={!hasPrevPage}
          className={`px-4 py-2 rounded-md ${
            hasPrevPage 
              ? 'bg-red-600 text-white hover:bg-red-700' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => setPageToken(pageToken)}
          disabled={!hasNextPage}
          className={`px-4 py-2 rounded-md ${
            hasNextPage 
              ? 'bg-red-600 text-white hover:bg-red-700' 
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
