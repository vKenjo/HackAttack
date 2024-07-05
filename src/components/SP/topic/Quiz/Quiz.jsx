import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRandomQuestions, sanitizeAnswer } from './Utils.js';
import pythonGET from '../../LanguageJSON/pythonGET.json';

const Quiz = () => {
  // State variables
  const [questions, setQuestions] = useState([]); // Stores the questions to be displayed
  const [answers, setAnswers] = useState({}); // Stores user's answers for each question
  const [error, setError] = useState(''); // For storing error messages
  const navigate = useNavigate();

  // Fetches and processes data on component mount
  useEffect(() => {
    console.log(pythonGET); // Log curriculum data for debugging

    // Check if curriculum data exists
    if (pythonGET && pythonGET.subtopics && pythonGET.subtopics.length > 0) {
      const subtopic = pythonGET.subtopics[0]; // Select the first subtopic for now
      console.log("Selected Subtopic:", subtopic);

      // Check if questions exist in the subtopic
      if (subtopic.questions && subtopic.questions.length > 0) {
        const randomQuestions = getRandomQuestions(subtopic.questions, 5);
        console.log("Random Questions:", randomQuestions);
        setQuestions(randomQuestions);
      } else {
        setError('No questions available in the selected subtopic.');
        console.error('No questions available in the selected subtopic.');
      }
    } else {
      setError('No subtopics available in the curriculum.');
      console.error('No subtopics available in the curriculum.');
    }
  }, []);  // Runs only once after component mounts

  // Handles user input for each question
  const handleChange = (e, questionId) => {
    setAnswers({
      ...answers,
      [questionId]: sanitizeAnswer(e.target.value),
    });
  };

  // Submits quiz and navigates to result page
  const handleSubmit = () => {
    navigate('result', { state: { questions, answers } });
  };

  return (
    <div>
      <h1>Quiz</h1>
      {/* Display error message or loading message */}
      {error ? (
        <p>{error}</p>
      ) : questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
        // Map through questions and render them
        questions.map((q, idx) => (
          <div key={q.id}>
            <p>{idx + 1}. {q.question}</p>
            <input
              type="text"
              onChange={(e) => handleChange(e, q.id)}
              value={answers[q.id] || ''}
            />
          </div>
        ))
      )}
      <button onClick={handleSubmit} disabled={questions.length === 0}>Submit</button>
    </div>
  );
};

export default Quiz;
