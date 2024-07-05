import React from 'react';
import { useParams } from 'react-router-dom';
import languages from '../../languages.json';
import pythonCurriculum from './LanguageJSON/pythonCurriculum.json';

const LanguageTopics = () => {
  const { id } = useParams(); // Get the language ID from the route parameters
  const languageData = languages.language.find(lang => lang.id === id);

  if (!languageData) {
    return <div>Language not found</div>;
  }

  const { language, description } = languageData;
  const { subtopics } = pythonCurriculum.pythonCurriculum;

  return (
    <div className='p-6'>
      <h1 className='text-4xl font-bold mb-4'>{language}</h1>
      <p className='text-lg mb-6'>{description}</p>
      {subtopics.map((subtopic) => (
        <div key={subtopic.id} className='mb-4'>
          <h2 className='text-2xl font-bold mb-2'>{subtopic.title}</h2>
          <ul className='list-disc list-inside'>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LanguageTopics;
