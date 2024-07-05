import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Begin from '../SP/topic/Quiz/Begin';
import Quiz from '../SP/topic/Quiz/Quiz';
import Result from '../SP/topic/Quiz/Result';

const QuizFrame = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Begin />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default QuizFrame;
