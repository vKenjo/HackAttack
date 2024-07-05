import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Learn = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Learn to Code</h1>
      <p>Start your coding journey by watching the video and trying out the exercises below.</p>
      <Link to={`/language/${id}/topic/learn/frame`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
        Start Coding
      </Link>
    </div>
  );
};

export default Learn;
