import React, { useState } from 'react';
import Question from './Question';

const Battle = ({ playerHealth, enemyHealth, question, onAnswer }) => {
    const [answer, setAnswer] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAnswer(answer === question.answer);
        setAnswer("");
    };

    return (
        <div>
            <h2>Player Health: {playerHealth}</h2>
            <h2>Enemy Health: {enemyHealth}</h2>
            <Question
                question={question.question}
                answer={answer}
                setAnswer={setAnswer}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default Battle;
