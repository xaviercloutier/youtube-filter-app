'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

export default function LoadingSpinner({ 
  size = 'medium', 
  color = 'border-red-600' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    small: 'h-6 w-6 border-2',
    medium: 'h-12 w-12 border-t-2 border-b-2',
    large: 'h-16 w-16 border-4'
  };

  return (
    <div className="flex justify-center items-center py-4">
      <div className={`animate-spin rounded-full ${sizeClasses[size]} ${color}`}></div>
    </div>
  );
}
