import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import PostCard from './components/PostCard';
import AdSection from './components/AdSection';
import PopularPosts from './components/PopularPosts';

const App = () => {
  return (
    <div className="h-screen bg-gray-50">
      <div className="w-full mb-14">
        <Navbar />
      </div>
      <div className="flex justify-between">
        <Sidebar />
        <div className='w-4/5 bg-white mt-6'>
          <PopularPosts />
          <PostCard />
        </div>
        <div className="flex ">
          <AdSection />
        </div>
      </div>
    </div>
  );
};

export default App;
