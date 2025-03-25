# YouTube Filter App - README

## Overview

The YouTube Filter App is a web application that allows users to search for and filter YouTube videos using the YouTube Data API v3. The app provides an intuitive interface with extensive filtering capabilities to help users find exactly the content they're looking for.

![YouTube Filter App Screenshot](https://example.com/screenshot.png)

## Features

- **Powerful Search**: Search across YouTube's vast video library
- **Extensive Filtering**: Filter videos by duration, definition, dimension, captions, license, and more
- **Multiple Result Types**: Search for videos, channels, or playlists
- **Sorting Options**: Sort results by relevance, date, rating, view count, or title
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Error Handling**: Robust error handling and user feedback
- **Secure API Integration**: Server-side API key protection

## Technology Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **API Integration**: YouTube Data API v3
- **Deployment**: Vercel (recommended)

## Documentation

The following documentation is available:

- [Research Notes](./research_notes.md) - Detailed research on YouTube API capabilities
- [Architecture Design](./architecture_design.md) - Technical architecture and design decisions
- [Deployment Guide](./deployment_guide.md) - Instructions for deploying the application
- [User Guide](./user_guide.md) - Guide for end users on how to use the application
- [Testing Report](./testing_report.md) - Comprehensive testing results

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A Google Developer account with YouTube Data API access
- An API key for the YouTube Data API

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/youtube-filter-app.git
   cd youtube-filter-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory with your YouTube API key:
   ```
   YOUTUBE_API_KEY=your_api_key_here
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Deployment

For detailed deployment instructions, please refer to the [Deployment Guide](./deployment_guide.md).

## Usage

For detailed usage instructions, please refer to the [User Guide](./user_guide.md).

## Project Structure

```
youtube_filter_app/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── search/
│   │   │   │   └── route.ts
│   │   │   └── videos/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── providers.tsx
│   ├── components/
│   │   ├── ErrorBoundary.tsx
│   │   ├── FilterPanel.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── Pagination.tsx
│   │   ├── SearchBar.tsx
│   │   └── VideoGrid.tsx
│   └── lib/
│       ├── context.tsx
│       ├── use-youtube-search.ts
│       └── youtube-api.ts
├── public/
├── .env.local
├── architecture_design.md
├── deployment_guide.md
├── next.config.ts
├── package.json
├── research_notes.md
├── testing_report.md
├── tsconfig.json
└── user_guide.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- YouTube Data API v3
- Next.js
- Tailwind CSS
- Vercel for hosting

## Contact

For any questions or support, please contact:
- Email: support@youtubefilterapp.com
- GitHub Issues: [https://github.com/yourusername/youtube-filter-app/issues](https://github.com/yourusername/youtube-filter-app/issues)
