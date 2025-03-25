#!/bin/bash

# Local Deployment Script for YouTube Filter App
# This script automates the process of running the app locally

echo "YouTube Filter App - Local Deployment Script"
echo "============================================"

# Check for Node.js installation
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js before continuing."
    exit 1
fi

# Check for npm installation
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed. Please install npm before continuing."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d 'v' -f 2)
NODE_MAJOR_VERSION=$(echo $NODE_VERSION | cut -d '.' -f 1)
if [ $NODE_MAJOR_VERSION -lt 14 ]; then
    echo "Warning: Node.js version $NODE_VERSION detected. This app requires Node.js 14 or later."
    echo "Please consider upgrading your Node.js installation."
    read -p "Continue anyway? (y/n): " CONTINUE
    if [ "$CONTINUE" != "y" ]; then
        exit 1
    fi
fi

echo "✅ Node.js version $NODE_VERSION detected"

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "Creating .env.local file..."
    echo "YOUTUBE_API_KEY=your_api_key_here" > .env.local
    echo "⚠️ Please edit .env.local and add your YouTube API key"
else
    echo "✅ .env.local file exists"
fi

# Install dependencies
echo "Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "Error: Failed to install dependencies. Please check your internet connection and try again."
    exit 1
fi
echo "✅ Dependencies installed successfully"

# Run the development server
echo "Starting the development server..."
echo "The app will be available at http://localhost:3000"
echo "Press Ctrl+C to stop the server"
npm run dev
