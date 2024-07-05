// src/components/Pages/BattleFrame.jsx
import React, { useState } from 'react';
import Battle from '../MP/Battle';

const BattleFrame = () => {
    const [playerHealth, setPlayerHealth] = useState(100);
    const [enemyHealth, setEnemyHealth] = useState(100);
    const [questionIndex, setQuestionIndex] = useState(0);

    const questions = [
        { question: "What is 2 + 2?", answer: "4" },
        { question: "What is the capital of France?", answer: "Paris" },
    ];

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setEnemyHealth(enemyHealth - 10);
        } else {
            setPlayerHealth(playerHealth - 10);
        }
        setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };

    return (
        <Battle
            playerHealth={playerHealth}
            enemyHealth={enemyHealth}
            question={questions[questionIndex]}
            onAnswer={handleAnswer}
        />
    );
};

export default BattleFrame;
