import React from "react";

const Loading = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-64 bg-gray-300 rounded-lg"></div>

      {/* Content Section */}
      <div className="mt-6 space-y-4">
        {/* Title Skeleton */}
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>

        {/* Subtext Skeletons (Category & Area) */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>

        {/* Price Skeleton */}
        <div className="h-10 bg-gray-300 rounded w-20 mt-4"></div>

        {/* Buttons Skeleton */}
        <div className="mt-8 flex gap-4">
          {/* Add to Cart Button */}
          <div className="h-12 bg-gray-300 rounded-lg flex-1"></div>
          {/* Watch Video Button */}
          <div className="h-12 bg-gray-300 rounded-lg flex-1"></div>
        </div>
      </div>

      {/* Accessibility Label */}
      <span className="sr-only">Loading food details...</span>
    </div>
  );
};

export default Loading;
