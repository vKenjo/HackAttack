// src/components/SP/topic/Question.jsx
import React from 'react';

const Question = ({ question, answer, setAnswer, handleSubmit }) => {
    return (
        <div>
            <h3>{question}</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Question;
