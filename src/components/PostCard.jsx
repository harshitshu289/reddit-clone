import React from "react";

// function to format numbers
const formatNumber = (number) => {
  if (number >= 1000) {
    return (number / 1000).toFixed(number % 1000 === 0 ? 0 : 1) + "k";
  }
  return number.toString();
};

const PostCard = ({ post }) => {
  return (
    <div className="border-b p-4 flex items-start gap-4">
      {/* Thumbnail */}
      <div className="flex-shrink-0">
        {post?.thumbnail && post?.thumbnail.startsWith("http") ? (
          <img
            src={post.thumbnail}
            alt="Post Thumbnail"
            className="w-20 h-20 rounded-md object-cover"
          />
        ) : (
          <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>

      {/* Post Content */}
      <div className="flex-grow">
        <h2 className="text-md font-bold mb-1">{post?.title}</h2>
        <div className="text-sm text-gray-500 flex items-center gap-2 mb-1">
          <span>Posted by</span>
          <span className="font-medium">{post?.author_fullname || "Unknown"}</span>
          <span>·</span>
          <span>{new Date(post?.created_utc * 1000).toLocaleString()}</span>
        </div>
        {post?.selftext && (
          <p className="text-sm text-gray-700 line-clamp-3">{post?.selftext}</p>
        )}
        <div className="flex items-center gap-4 mt-2">
          {/* Comments */}
          <div className="flex items-center gap-1 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 14.25l-4.5 2.25.75-3.75L1.5 9.75 6 8.25m0 0v-3h6.75l3.75 3.75m-3.75 0h9l1.5 4.5-7.5 3.75m-7.5-7.5V21"
              />
            </svg>
            <span>{formatNumber(Math.floor(Math.random() * 1000))} Comments</span>
          </div>

          {/* Shares */}
          <div className="flex items-center gap-1 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 8.25l-3.75-3.75m3.75 3.75L12 12l-3.75 3.75m7.5-7.5H3.75m0 0A2.25 2.25 0 011.5 6V2.25M3.75 12h16.5"
              />
            </svg>
            <span>{formatNumber(Math.floor(Math.random() * 500))} Shares</span>
          </div>
        </div>
      </div>

      {/* Post Actions (Votes) */}
      <div className="flex flex-col items-center justify-between text-sm text-gray-500">
        {/* Upvote */}
        <button className="text-red-500 hover:text-red-500 border rounded-md px-3 py-1 bg-orange-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3.75l6.75 6.75h-4.5v6H9.75v-6H5.25L12 3.75z"
            />
          </svg>
        </button>

        {/* Vote Count */}
        <span className="text-lg font-bold text-gray-700 m-2">
          {formatNumber(post?.ups || 50000)}
        </span>

        {/* Downvote */}
        <button className="text-red-500 hover:text-red-500 border rounded-md px-3 py-1 bg-orange-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25l-6.75-6.75h4.5v-6H14.25v6h4.5L12 20.25z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
