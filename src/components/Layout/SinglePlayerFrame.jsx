import React from 'react';
import { Link } from 'react-router-dom';
import languagesData from '../../languages.json';

const SinglePlayerFrame = () => {
  return (
    <div className='p-6'>
    <div className='leading-none'>
        <h1 className="pl-10 text-6xl font-bold mb-1 text-white">TechieKid</h1>
        <h4 className="pl-10 text-3xl text-white">Mastery: 0%</h4>
        <h4 className="pl-10 text-3xl mb-5 text-white">Current Rank: Newbie</h4>
    </div>
    <div className='p-10'>
      {
      
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {languagesData.language.map((lang) => (
              <div
                  key={lang.id}
                  className='pl-4 bg-white shadow-md rounded-lg overflow-hidden flex'
              >
                  <div className='p-4 flex-1'>
                      <h3 className='text-xl font-bold mb-2'>{lang.language}</h3>
                      <p className='text-gray-700'>{lang.description}</p>
                      <Link
                          to={`/language/${lang.id}`}
                          className='mt-4 block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                      >
                          View Courses
                      </Link>
                  </div>
                  <div className='w-1/3 p-4'>
                      <img 
                          src={`/CHARACTERS_WITH_BG/${lang.language}.png`}
                          alt={`${lang.language} image`} 
                          className='w-full h-auto object-cover rounded-r-lg' 
                      />
                  </div>
              </div>
          ))}
      </div>

      /* <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {languagesData.language.map((lang) => (
          <div
            key={lang.id}
            className='pl-4 bg-white shadow-md rounded-lg overflow-hidden'
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
      </div> */}
    </div>
    </div>
  );
};

export default SinglePlayerFrame;
