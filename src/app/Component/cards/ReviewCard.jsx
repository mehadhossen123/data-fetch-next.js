import React from "react";

const ReviewCard = ({ data }) => {
  // Destructuring for cleaner code
  const { user, photo, rating, review, likes, date } = data;

  // Formatting date to a readable format (e.g., Jan 12, 2025)
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-5 hover:shadow-md transition-shadow">
      {/* Header: Photo and Name */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-100"
        />
        <div>
          <h3 className="font-bold text-gray-900 leading-tight">{user}</h3>
          <p className="text-xs text-gray-400">{formattedDate}</p>
        </div>
      </div>

      {/* Rating Stars */}
      <div className="flex items-center mb-3">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < rating ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed mb-4">{review}</p>

      {/* Footer: Likes and Action */}
      <div className="flex items-center justify-between border-t pt-4 mt-auto">
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <svg
            className="w-4 h-4 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
          <span>{likes.length} likes</span>
        </div>
        <button className="text-xs font-semibold text-blue-600 hover:underline">
          Helpful?
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
