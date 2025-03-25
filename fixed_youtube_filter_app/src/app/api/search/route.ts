import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// This would normally be stored in environment variables
const API_KEY = process.env.YOUTUBE_API_KEY || 'YOUR_YOUTUBE_API_KEY';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        // Convert searchParams to a plain object
        ...Object.fromEntries(searchParams.entries()),
        key: API_KEY,
      },
    });
    
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error searching YouTube:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data from YouTube API' },
      { status: 500 }
    );
  }
}
