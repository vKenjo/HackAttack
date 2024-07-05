import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import languages from '../../languages.json'; // Verify path correctness
import pythonCurriculum from './LanguageJSON/pythonCurriculum.json';

const LanguageTopics = () => {
  const { id } = useParams();
  const [languageData, setLanguageData] = useState(null);

  useEffect(() => {
    // Find languageData based on id
    const foundLanguage = languages.language.find(lang => lang.id === id);

    if (foundLanguage) {
      setLanguageData(foundLanguage);
    } else {
      setLanguageData(null); // Language not found
    }
  }, [id]); // Run effect whenever id changes

  if (!languageData) {
    return <div>Language not found for ID: {id}</div>;
  }

  const { language, description } = languageData;
  const subtopics = pythonCurriculum.pythonCurriculum.subtopics || []; // Initialize as empty array if undefined

  return (
    <div className='p-6'>
      <h1 className='text-4xl font-bold mb-4'>{language}</h1>
      <p className='text-lg mb-6'>{description}</p>
      <div className="mt-6">
        <Link to={`/language/${id}/topic/learn`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          Start Your Journey
        </Link>
        <Link to={`/language/${id}/topic/quiz`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Test My Mastery
        </Link>
      </div>
      {/* Check if subtopics exists and is an array */}
      {Array.isArray(subtopics) && subtopics.length > 0 && (
        subtopics.map((subtopic) => (
          <div key={subtopic.id} className='mb-4'>
            <h2 className='text-2xl font-bold mb-2'>{subtopic.title}</h2>
            <ul className='list-disc list-inside'>
              {Array.isArray(subtopic.lessons) && subtopic.lessons.map((lesson, index) => (
                <li key={index}>{lesson}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default LanguageTopics;
