# YouTube Filter App - Permanent Deployment Instructions

## Overview

This document provides detailed instructions for permanently deploying the YouTube Filter App to a public URL. Two deployment options are provided:

1. **Vercel Deployment** (Recommended for Next.js applications)
2. **Docker Deployment** (For self-hosting or other cloud providers)

## Prerequisites

Before deploying, you'll need:

1. A Google Developer account with access to the YouTube Data API v3
2. An API key for the YouTube Data API
3. A GitHub account (for Vercel deployment)
4. A Vercel account (for Vercel deployment)
5. Docker and Docker Compose installed (for Docker deployment)

## Option 1: Vercel Deployment (Recommended)

Vercel is the platform created by the developers of Next.js and offers the simplest deployment experience.

### Step 1: Prepare Your Repository

1. Create a new GitHub repository
2. Push the YouTube Filter App code to this repository:

```bash
cd youtube_filter_app
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/youtube-filter-app.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [Vercel](https://vercel.com/) and sign up or log in
2. Click "Add New..." and select "Project"
3. Import your GitHub repository
4. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
5. Add environment variable:
   - Name: YOUTUBE_API_KEY
   - Value: Your YouTube API key
6. Click "Deploy"

Vercel will automatically build and deploy your application. Once complete, you'll receive a permanent URL (e.g., https://youtube-filter-app.vercel.app).

### Step 3: Configure Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your custom domain and follow the instructions to configure DNS settings

## Option 2: Docker Deployment

For self-hosting or deploying to other cloud providers, you can use Docker.

### Step 1: Build the Docker Image

```bash
cd youtube_filter_app
docker build -t youtube-filter-app --build-arg YOUTUBE_API_KEY=your_api_key_here .
```

### Step 2: Run the Container

```bash
docker run -p 3000:3000 youtube-filter-app
```

The application will be available at http://localhost:3000.

### Step 3: Deploy to Cloud Provider

For cloud deployment with Docker:

#### AWS Elastic Container Service (ECS)

1. Push your Docker image to Amazon ECR:
```bash
aws ecr create-repository --repository-name youtube-filter-app
aws ecr get-login-password | docker login --username AWS --password-stdin your-aws-account-id.dkr.ecr.region.amazonaws.com
docker tag youtube-filter-app:latest your-aws-account-id.dkr.ecr.region.amazonaws.com/youtube-filter-app:latest
docker push your-aws-account-id.dkr.ecr.region.amazonaws.com/youtube-filter-app:latest
```

2. Create an ECS cluster and service using the AWS Management Console or CLI

#### Google Cloud Run

1. Push your Docker image to Google Container Registry:
```bash
gcloud auth configure-docker
docker tag youtube-filter-app:latest gcr.io/your-project-id/youtube-filter-app:latest
docker push gcr.io/your-project-id/youtube-filter-app:latest
```

2. Deploy to Cloud Run:
```bash
gcloud run deploy youtube-filter-app --image gcr.io/your-project-id/youtube-filter-app:latest --platform managed --allow-unauthenticated
```

#### Digital Ocean App Platform

1. Push your Docker image to Digital Ocean Container Registry:
```bash
doctl registry login
docker tag youtube-filter-app:latest registry.digitalocean.com/your-registry/youtube-filter-app:latest
docker push registry.digitalocean.com/your-registry/youtube-filter-app:latest
```

2. Create an App in the Digital Ocean App Platform using this container

## Maintaining Your Deployment

### Updating Your Application

#### Vercel Updates

1. Push changes to your GitHub repository
2. Vercel will automatically rebuild and deploy the updated application

#### Docker Updates

1. Make changes to your code
2. Rebuild the Docker image with a new tag:
```bash
docker build -t youtube-filter-app:v2 --build-arg YOUTUBE_API_KEY=your_api_key_here .
```
3. Push and deploy the new image following the same steps as the initial deployment

### Monitoring

- Vercel provides built-in analytics and monitoring
- For Docker deployments, consider adding monitoring solutions like Prometheus and Grafana

## Security Considerations

1. **API Key Protection**: Your YouTube API key is stored as an environment variable and not exposed in client-side code
2. **Regular Updates**: Keep your dependencies updated to patch security vulnerabilities
3. **HTTPS**: Ensure your deployment uses HTTPS for secure communication

## Troubleshooting

### Common Issues

1. **API Key Issues**: Verify your YouTube API key is correctly set in environment variables
2. **Build Failures**: Check build logs for errors in your code or configuration
3. **CORS Errors**: Ensure your API routes are properly configured
4. **Rate Limiting**: Monitor your YouTube API quota usage to avoid exceeding limits

## Support

For additional support:
- Review the YouTube Data API documentation
- Check the Next.js deployment documentation
- Refer to your cloud provider's documentation for platform-specific issues
