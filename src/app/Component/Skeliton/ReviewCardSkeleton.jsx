import React from "react";

const ReviewCardSkeleton = () => {
  return (
    <div className="max-w-md w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-5 animate-pulse">
      {/* Header Skeleton: Photo and Name */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-3 bg-gray-100 rounded w-1/4"></div>
        </div>
      </div>

      {/* Rating Stars Skeleton */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 w-4 bg-gray-200 rounded-sm"></div>
        ))}
      </div>

      {/* Review Text Skeleton */}
      <div className="space-y-3 mb-6">
        <div className="h-3 bg-gray-200 rounded w-full"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
      </div>

      {/* Footer Skeleton */}
      <div className="flex items-center justify-between border-t pt-4">
        <div className="h-4 bg-gray-100 rounded w-16"></div>
        <div className="h-4 bg-gray-100 rounded w-12"></div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
