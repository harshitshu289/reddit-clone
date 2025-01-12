import React, { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import "./loader.css"

const PopularPosts = () => {
  const [filter, setFilter] = useState("hot"); // Filter state
  const [data, setData] = useState(null); // Data state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const subreddit = "popular";
  const limit = 10;

  const filters = ["Hot", "New", "Controversial", "Rising", "Top"];

 
  const fetchPosts = async () => {
    setLoading(true); 
    setError(null); 

    try {
      const response = await axios.get(
        `https://www.reddit.com/r/${subreddit}/${filter}.json?limit=${limit}`
      );
      setData(response.data); 
    } catch (err) {
      setError(err.message); 
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [filter]); 

  return (
    <div className="p-4">
     <div className="flex justify-between">
     <h1 className="text-2xl font-bold mb-4">Popular Posts</h1>

          {/* Filters Section */}
         <div className="flex gap-4 mb-4">
        {filters.map((option) => (
       <button
        key={option}
        className={`px-4 py-2 rounded ${
        filter === option.toLowerCase()
          ? "bg-gray-200 text-gray-700 text-sm"
          : "bg-white text-gray-700 text-sm"
      }`}
      onClick={() => setFilter(option.toLowerCase())}
    >
      {option}
    </button>
  ))}
</div>
     </div>

      {/* Display loading, error, or data */}
      {loading && <p className="loader"></p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {data && (
        <div>
          {data.data.children.map((post) => (
            <PostCard key={post.data.id} post={post.data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PopularPosts;
