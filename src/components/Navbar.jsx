import React, { useState } from "react";
import { LuSun } from "react-icons/lu";
import RedditIcon from "../assets/reddit-logo-2436.svg";
import { BsBarChartFill } from "react-icons/bs";
import { GrBarChart } from "react-icons/gr";
import { FiMessageSquare, FiHome } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import axios from "axios";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [searchResults, setSearchResults] = useState([]); // State for API results
  const [loading, setLoading] = useState(false); // State for loading
  const [showResults, setShowResults] = useState(false); // Toggle for showing results

  const handleSearch = async () => {
    if (!searchQuery.trim()) return; // Prevent empty searches
    setLoading(true);
    setShowResults(true);
    try {
      const response = await axios.get(
        `https://www.reddit.com/search.json?q=${searchQuery}`
      );
      setSearchResults(response.data.data.children); // Store results
    } catch (err) {
      console.error("Error fetching search results:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // Trigger search on Enter key
    }
  };

  const handleCloseResults = () => {
    setSearchResults([]);
    setSearchQuery("");
    setShowResults(false);
  };

  return (
    <div className="p-2 bg-white border-b shadow-sm flex justify-between items-center w-full fixed top-0 z-50 mb-10">
      <div className="flex gap-8 items-center mx-5">
        <LuSun className="text-2xl" />
        <img
          src={RedditIcon}
          alt="Reddit Icon"
          style={{ width: "50px", height: "50px" }}
        />
        <h1 className="text-xl -mx-5">reddit</h1>
      </div>

      {/* Home, popular, all section */}
      <div className="flex gap-8">
        <div className="flex gap-2 items-center">
          <FiHome className="text-2xl" />
          <p className="text-xl">Home</p>
        </div>

        <div className="flex gap-2 items-center">
          <BsBarChartFill className="text-2xl text-red-600 font-bold" />
          <p className="text-xl text-red-600 font-extrabold">Popular</p>
        </div>

        <div className="flex gap-2 items-center">
          <GrBarChart className="text-2xl font-bold" />
          <p className="text-xl font-semibold">All</p>
        </div>
      </div>

      {/* Search Section */}
      <div className="flex gap-10 items-center w-1/2 relative">
        <div className="relative w-full">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Find community or post"
            className="px-12 py-2 border rounded-lg w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          onClick={handleSearch}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:scale-95 "
        >
          <p className="font-bold text-sm px-4 py-2">Search</p>
        </button>

        {/* Search Results Dropdown */}
        {showResults && (
          <div className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-lg max-h-80 overflow-y-auto z-50">
            <div className="flex justify-between items-center p-4 border-b">
              <p className="font-semibold">Search Results</p>
              <IoClose
                className="text-xl cursor-pointer"
                onClick={handleCloseResults}
              />
            </div>
            {loading && <p className="p-4">Loading...</p>}
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <div key={result.data.id} className="p-2 border-b">
                  <a
                    href={`https://www.reddit.com${result.data.permalink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {result.data.title}
                  </a>
                  <p className="text-sm text-gray-500">
                    {result.data.subreddit_name_prefixed}
                  </p>
                </div>
              ))
            ) : (
              !loading && searchQuery && (
                <p className="p-4 text-center">No results found.</p>
              )
            )}
          </div>
        )}
      </div>

      <div className="flex gap-6 mx-10">
        <FiMessageSquare className="text-2xl" />
        <MdMailOutline className="text-2xl" />
        <CgProfile className="text-2xl" />
        <IoIosArrowDown className="text-2xl" />
      </div>
    </div>
  );
};

export default Navbar;
