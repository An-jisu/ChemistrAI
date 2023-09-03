import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex items-center justify-center">
        <FaSpinner className="animate-spin text-primary text-4xl mr-2" />
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
      <Link to="/Analyze_result">
        <button className='text-white'>white</button>
      </Link>
    </div>
  );
};

export default Loading;