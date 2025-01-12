import React, { useState } from 'react';

const Sidebar = () => {
  const favorites = ['r/funnymore', 'r/breakingnews', 'r/lovestory', 'r/gamingfun'];
  const feeds = ['r/moview', 'r/gaming', 'r/pics', 'r/gifs'];
  const community = ['r/funnymore', 'r/breadkingnews', 'r/gaming', 'r/lovestory'];

  const filterOptions = ['All', 'Favorites', 'Feeds', 'Community'];
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div className="w-[15%] p-4 mt-6">
      <div className="flex flex-col mx-6">

        {/* Filter By Section */}
        <div className="mb-6">
          <label htmlFor="filter" className="text-sm font-semibold">Filter By</label>
          <select
            id="filter"
            value={selectedFilter}
            onChange={handleFilterChange}
            className="w-full p-2 mt-2 border border-gray-300 rounded"
          >
            {filterOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* FAVOURITES Section */}
        {(selectedFilter === 'All' || selectedFilter === 'Favorites') && (
          <>
            <div className="mb-10">
              <div className="flex justify-between">
                <p className="text-sm font-semibold mb-4">FAVOURITES</p>
                <p className="text-sm opacity-40">All</p>
              </div>
              <ul>
                {favorites.map((fav) => (
                  <li key={fav} className="mb-2 text-blue-500 hover:underline">{fav}</li>
                ))}
              </ul>
            </div>
            <div className="h-[1.5px] bg-gray-200"></div>
          </>
        )}

        {/* REDDIT FEEDS Section */}
        {(selectedFilter === 'All' || selectedFilter === 'Feeds') && (
          <>
            <div className="mb-10">
              <div className="flex justify-between">
                <p className="text-sm font-semibold mt-6 mb-4">REDDIT FEEDS</p>
                <p className="text-sm opacity-40 mt-6">All</p>
              </div>
              <ul>
                {feeds.map((feed) => (
                  <li key={feed} className="mb-2 text-blue-500 hover:underline">{feed}</li>
                ))}
              </ul>
            </div>
            <div className="h-[1.5px] bg-gray-200"></div>
          </>
        )}

        {/* COMMUNITY Section */}
        {(selectedFilter === 'All' || selectedFilter === 'Community') && (
          <>
            <div>
              <div className="flex justify-between">
                <p className="text-sm font-semibold mt-6 mb-4">COMMUNITY</p>
                <p className="text-sm opacity-40 mt-6">All</p>
              </div>
              <ul>
                {community.map((com) => (
                  <li key={com} className="mb-2 text-blue-500 hover:underline">{com}</li>
                ))}
              </ul>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Sidebar;
