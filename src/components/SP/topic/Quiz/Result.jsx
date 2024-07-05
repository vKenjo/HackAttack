import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { questions = [], answers = {} } = location.state || {};

  const getScore = () => {
    let score = 0;
    questions.forEach(q => {
      if (sanitizeAnswer(answers[q.id]) === q.answer) {
        score += 1;
      }
    });
    return score;
  };

  const sanitizeAnswer = (answer) => {
    return answer.trim();
  };

  const score = getScore();

  return (
    <div>
      <h1>Results</h1>
      <p>Your Score: {score} / {questions.length}</p>
      <h2>Review:</h2>
      {questions.length > 0 ? (
        questions.map(q => (
          <div key={q.id}>
            <p><strong>Question:</strong> {q.question}</p>
            <p><strong>Your Answer:</strong> {answers[q.id]}</p>
            <p><strong>Correct Answer:</strong> {q.answer}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
      <button onClick={() => navigate('/')}>Back to Start</button>
    </div>
  );
};

export default Result;
