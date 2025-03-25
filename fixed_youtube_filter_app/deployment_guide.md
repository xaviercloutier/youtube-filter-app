# YouTube Filter App - Deployment Guide

## Overview

This document provides instructions for deploying the YouTube Filter App, a web application that allows users to search for and filter YouTube videos using the YouTube Data API v3.

## Prerequisites

Before deploying the application, ensure you have:

1. A Google Developer account with access to the YouTube Data API v3
2. An API key for the YouTube Data API
3. A Vercel account (for the recommended deployment method)
4. Node.js and npm installed on your local machine

## Configuration

### Setting up the YouTube API Key

1. Visit the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3 for your project
4. Create an API key in the Credentials section
5. (Optional) Restrict the API key to only the YouTube Data API and your deployment domain

### Environment Variables

Create a `.env.local` file in the root directory of the project with the following content:

```
YOUTUBE_API_KEY=your_api_key_here
```

For production deployment, you'll need to configure this environment variable in your hosting platform.

## Local Deployment

To run the application locally:

1. Install dependencies:
   ```
   npm install
   ```

2. Build the application:
   ```
   npm run build
   ```

3. Start the production server:
   ```
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Production Deployment with Vercel

Vercel is the recommended platform for deploying Next.js applications.

### Deploying to Vercel

1. Install the Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Login to Vercel:
   ```
   vercel login
   ```

3. Deploy the application:
   ```
   vercel
   ```

4. For subsequent deployments:
   ```
   vercel --prod
   ```

### Environment Variables in Vercel

1. Go to the Vercel dashboard
2. Select your project
3. Navigate to Settings > Environment Variables
4. Add the `YOUTUBE_API_KEY` variable with your API key
5. Save and redeploy if necessary

## Alternative Deployment Options

### Netlify

1. Install the Netlify CLI:
   ```
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```
   netlify login
   ```

3. Deploy the application:
   ```
   netlify deploy
   ```

4. For production deployment:
   ```
   netlify deploy --prod
   ```

### Docker Deployment

A Dockerfile is provided for containerized deployment:

1. Build the Docker image:
   ```
   docker build -t youtube-filter-app .
   ```

2. Run the container:
   ```
   docker run -p 3000:3000 -e YOUTUBE_API_KEY=your_api_key_here youtube-filter-app
   ```

## Post-Deployment Verification

After deploying, verify the following:

1. The application loads correctly
2. Search functionality works as expected
3. Filtering options are applied correctly
4. Pagination works for navigating through results
5. Error handling functions properly

## Monitoring and Maintenance

### API Quota Monitoring

Monitor your YouTube API quota usage in the Google Cloud Console to avoid exceeding limits.

### Performance Monitoring

Use Vercel Analytics or other monitoring tools to track:
- Page load times
- API response times
- Error rates
- User engagement

### Updates and Maintenance

1. Regularly update dependencies to maintain security and performance
2. Monitor for changes in the YouTube Data API that might affect functionality
3. Implement user feedback to improve the application

## Troubleshooting

### Common Issues

1. **API Key Issues**: Ensure your API key is correctly set in environment variables
2. **CORS Errors**: Verify that your API routes are properly configured
3. **Build Failures**: Check for TypeScript errors or missing dependencies
4. **API Quota Exceeded**: Implement caching or rate limiting to reduce API calls

## Support

For additional support:
- Review the YouTube Data API documentation
- Check the Next.js deployment documentation
- Contact the development team for application-specific issues
