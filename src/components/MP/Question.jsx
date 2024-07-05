import React, { useState } from 'react';

const Question = ({ question, options, onAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAnswer(selectedAnswer === question.correctAnswer);
        setSelectedAnswer(null);
    };

    return (
        <div className="p-4 bg-white rounded shadow-lg">
            <h3 className="text-lg font-bold mb-4">{question.text}</h3>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    {options.map((option, index) => (
                        <label key={index} className="block">
                            <input
                                type="radio"
                                name="answer"
                                value={option}
                                checked={selectedAnswer === option}
                                onChange={() => setSelectedAnswer(option)}
                                className="mr-2"
                            />
                            {option}
                        </label>
                    ))}
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Question;
