'use client';

interface VideoGridProps {
  videos: any[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  if (videos.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="relative pb-[56.25%]">
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
              {video.duration}
            </div>
          </div>
          <div className="p-3">
            <h3 className="font-medium text-sm line-clamp-2 mb-1">{video.title}</h3>
            <p className="text-gray-600 text-xs">{video.channelTitle}</p>
            <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
              <span>{video.viewCount} views</span>
              <span>{video.publishedAt}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
