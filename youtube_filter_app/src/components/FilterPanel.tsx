'use client';

interface FilterPanelProps {
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
  updateFilters: (newFilters: Partial<FilterPanelProps['filters']>) => void;
}

export default function FilterPanel({ filters, updateFilters }: FilterPanelProps) {
  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold mb-3">Filter Options</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Result Type */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Result Type</label>
          <select
            value={filters.type}
            onChange={(e) => updateFilters({ type: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          >
            <option value="video">Videos</option>
            <option value="channel">Channels</option>
            <option value="playlist">Playlists</option>
          </select>
        </div>
        
        {/* Sort Order */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Sort By</label>
          <select
            value={filters.order}
            onChange={(e) => updateFilters({ order: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          >
            <option value="relevance">Relevance</option>
            <option value="date">Upload Date</option>
            <option value="rating">Rating</option>
            <option value="viewCount">View Count</option>
            <option value="title">Title</option>
          </select>
        </div>
        
        {/* Video Duration */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Duration</label>
          <select
            value={filters.videoDuration}
            onChange={(e) => updateFilters({ videoDuration: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          >
            <option value="any">Any</option>
            <option value="short">Short (< 4 min)</option>
            <option value="medium">Medium (4-20 min)</option>
            <option value="long">Long (> 20 min)</option>
          </select>
        </div>
        
        {/* Video Definition */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Definition</label>
          <select
            value={filters.videoDefinition}
            onChange={(e) => updateFilters({ videoDefinition: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          >
            <option value="any">Any</option>
            <option value="high">HD</option>
            <option value="standard">Standard</option>
          </select>
        </div>
        
        {/* Video Dimension */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Dimension</label>
          <select
            value={filters.videoDimension}
            onChange={(e) => updateFilters({ videoDimension: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          >
            <option value="any">Any</option>
            <option value="2d">2D</option>
            <option value="3d">3D</option>
          </select>
        </div>
        
        {/* Video Caption */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Captions</label>
          <select
            value={filters.videoCaption}
            onChange={(e) => updateFilters({ videoCaption: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          >
            <option value="any">Any</option>
            <option value="closedCaption">With Captions</option>
            <option value="none">Without Captions</option>
          </select>
        </div>
        
        {/* Video License */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">License</label>
          <select
            value={filters.videoLicense}
            onChange={(e) => updateFilters({ videoLicense: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          >
            <option value="any">Any</option>
            <option value="creativeCommon">Creative Commons</option>
            <option value="youtube">Standard YouTube</option>
          </select>
        </div>
        
        {/* Video Type */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            value={filters.videoType}
            onChange={(e) => updateFilters({ videoType: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          >
            <option value="any">Any</option>
            <option value="episode">Episode</option>
            <option value="movie">Movie</option>
          </select>
        </div>
        
        {/* Max Results */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Results Per Page</label>
          <select
            value={filters.maxResults}
            onChange={(e) => updateFilters({ maxResults: parseInt(e.target.value) })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
          >
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
        </div>
      </div>
    </div>
  );
}
