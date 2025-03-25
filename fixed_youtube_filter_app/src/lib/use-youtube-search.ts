'use client';

import { useEffect } from 'react';
import { useSearch } from '@/lib/context';
import { searchYouTube, getVideoDetails, formatVideoDuration, formatViewCount, formatPublishedDate } from '@/lib/youtube-api';

export default function useYouTubeSearch() {
  const {
    searchQuery,
    filters,
    isLoading,
    setIsLoading,
    results,
    setResults,
    pageToken,
    setPageToken,
    setHasNextPage,
    setHasPrevPage
  } = useSearch();

  // Apply filters when they change
  useEffect(() => {
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    }
  }, [filters]);

  const performSearch = async (query: string, newPageToken: string = '') => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);

    try {
      // Prepare search parameters
      const searchParams = {
        q: query,
        part: 'snippet',
        maxResults: filters.maxResults,
        type: filters.type,
        order: filters.order,
        pageToken: newPageToken,
      };

      // Add video-specific filters if type is 'video'
      if (filters.type === 'video') {
        Object.assign(searchParams, {
          videoDuration: filters.videoDuration !== 'any' ? filters.videoDuration : undefined,
          videoDefinition: filters.videoDefinition !== 'any' ? filters.videoDefinition : undefined,
          videoDimension: filters.videoDimension !== 'any' ? filters.videoDimension : undefined,
          videoCaption: filters.videoCaption !== 'any' ? filters.videoCaption : undefined,
          videoLicense: filters.videoLicense !== 'any' ? filters.videoLicense : undefined,
          videoType: filters.videoType !== 'any' ? filters.videoType : undefined,
        });
      }

      // Remove undefined values
      Object.keys(searchParams).forEach(key => 
        searchParams[key] === undefined && delete searchParams[key]
      );

      // Perform search
      const searchResponse = await searchYouTube(searchParams);
      
      // Update pagination state
      setHasNextPage(!!searchResponse.nextPageToken);
      setHasPrevPage(!!searchResponse.prevPageToken);
      
      // If searching for videos, get additional details
      if (filters.type === 'video') {
        const videoIds = searchResponse.items
          .filter(item => item.id.videoId)
          .map(item => item.id.videoId);
        
        if (videoIds.length > 0) {
          const videoDetails = await getVideoDetails(videoIds);
          
          // Combine search results with video details
          const enhancedResults = searchResponse.items.map(searchItem => {
            const videoId = searchItem.id.videoId;
            const detailItem = videoDetails.items.find(item => item.id === videoId);
            
            if (detailItem) {
              return {
                id: videoId,
                title: searchItem.snippet.title,
                description: searchItem.snippet.description,
                thumbnail: searchItem.snippet.thumbnails.high.url,
                channelId: searchItem.snippet.channelId,
                channelTitle: searchItem.snippet.channelTitle,
                publishedAt: formatPublishedDate(searchItem.snippet.publishedAt),
                duration: formatVideoDuration(detailItem.contentDetails.duration),
                viewCount: formatViewCount(parseInt(detailItem.statistics.viewCount || '0')),
                likeCount: formatViewCount(parseInt(detailItem.statistics.likeCount || '0')),
                commentCount: formatViewCount(parseInt(detailItem.statistics.commentCount || '0')),
              };
            }
            
            return {
              id: videoId,
              title: searchItem.snippet.title,
              description: searchItem.snippet.description,
              thumbnail: searchItem.snippet.thumbnails.high.url,
              channelId: searchItem.snippet.channelId,
              channelTitle: searchItem.snippet.channelTitle,
              publishedAt: formatPublishedDate(searchItem.snippet.publishedAt),
              duration: 'N/A',
              viewCount: 'N/A',
              likeCount: 'N/A',
              commentCount: 'N/A',
            };
          });
          
          setResults(enhancedResults);
        } else {
          setResults([]);
        }
      } else {
        // For channels and playlists, use the search results directly
        const formattedResults = searchResponse.items.map(item => {
          const id = item.id.channelId || item.id.playlistId;
          return {
            id,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.high.url,
            publishedAt: formatPublishedDate(item.snippet.publishedAt),
          };
        });
        
        setResults(formattedResults);
      }
    } catch (error) {
      console.error('Error searching YouTube:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextPage = () => {
    if (pageToken) {
      performSearch(searchQuery, pageToken);
    }
  };

  const handlePrevPage = () => {
    setPageToken('');
    performSearch(searchQuery);
  };

  return {
    performSearch,
    handleNextPage,
    handlePrevPage
  };
}
