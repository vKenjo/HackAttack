import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRandomQuestions, sanitizeAnswer } from './Utils.js';
import pythonGET from '../../LanguageJSON/pythonGET.json';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (pythonGET && pythonGET.subtopics && pythonGET.subtopics.length > 0) {
      const subtopic = pythonGET.subtopics[0];
      if (subtopic.questions && subtopic.questions.length > 0) {
        const randomQuestions = getRandomQuestions(subtopic.questions, 5);
        setQuestions(randomQuestions);
      } else {
        setError('No questions available in the selected subtopic.');
      }
    } else {
      setError('No subtopics available in the curriculum.');
    }
  }, []);

  const handleChange = (e, questionId) => {
    setAnswers({
      ...answers,
      [questionId]: sanitizeAnswer(e.target.value),
    });
  };

  const handleSubmit = () => {
    navigate('/result', { state: { questions, answers } });  // Fixed path for navigation
  };

  return (
    <div>
      <h1>Quiz</h1>
      {error ? (
        <p>{error}</p>
      ) : questions.length === 0 ? (
        <p>Loading questions...</p>
      ) : (
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
