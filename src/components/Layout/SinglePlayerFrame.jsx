import React from 'react';
import { Link } from 'react-router-dom';
import languagesData from '../../languages.json';

const SinglePlayerFrame = () => {
  return (
    <div className='p-6'>
      <h2 className='text-3xl font-bold mb-6'>Single Player Frame</h2>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {languagesData.language.map((lang) => (
          <div
            key={lang.id}
            className='bg-white shadow-md rounded-lg overflow-hidden'
          >
            <div className='p-4'>
              <h3 className='text-xl font-bold mb-2'>{lang.language}</h3>
              <p className='text-gray-700'>{lang.description}</p>
              <Link
                to={`/language/${lang.id}`}
                className='mt-4 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                View Courses
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePlayerFrame;
