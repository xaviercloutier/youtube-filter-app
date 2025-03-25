import axios from 'axios';

// API key is now handled securely in the API routes
// No need to expose it in the client-side code

export interface YouTubeSearchParams {
  q: string;
  part: string;
  maxResults: number;
  type?: string;
  videoDuration?: string;
  videoDefinition?: string;
  videoDimension?: string;
  videoCaption?: string;
  videoLicense?: string;
  videoType?: string;
  order?: string;
  pageToken?: string;
}

export interface YouTubeSearchResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeSearchItem[];
}

export interface YouTubeSearchItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId?: string;
    channelId?: string;
    playlistId?: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: YouTubeThumbnail;
      medium: YouTubeThumbnail;
      high: YouTubeThumbnail;
    };
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  };
}

interface YouTubeThumbnail {
  url: string;
  width: number;
  height: number;
}

export async function searchYouTube(params: YouTubeSearchParams): Promise<YouTubeSearchResponse> {
  try {
    const response = await axios.get('/api/search', {
      params: {
        ...params,
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error searching YouTube:', error);
    throw error;
  }
}

export async function getVideoDetails(videoIds: string[]): Promise<any> {
  try {
    const response = await axios.get('/api/videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        id: videoIds.join(','),
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error getting video details:', error);
    throw error;
  }
}

export function formatVideoDuration(duration: string): string {
  // Convert ISO 8601 duration to readable format
  // Example: PT1H30M15S -> 1:30:15
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  
  if (!match) return '0:00';
  
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function formatViewCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
}

export function formatPublishedDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 1) {
    return 'Today';
  }
  if (diffDays === 1) {
    return 'Yesterday';
  }
  if (diffDays < 7) {
    return `${diffDays} days ago`;
  }
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  }
  
  const years = Math.floor(diffDays / 365);
  return `${years} ${years === 1 ? 'year' : 'years'} ago`;
}
