import React, { useState } from 'react';
import Player from './Player';
import Question from './Question';

const questions = [
    {
        text: "What is the correct print statement used in PYTHON?",
        options: ["A. Hotdog", "B. print(\"text\")", "C. Hotdog", "D. Hotdog"],
        correctAnswer: "B. print(\"text\")"
    },
    {
        text: "Which HTML tag is used to define an internal style sheet?",
        options: ["A. <style>", "B. <script>", "C. <css>", "D. <link>"],
        correctAnswer: "A. <style>"
    },
    // Add more questions as needed
];

const Battle = ({ playerHealth, enemyHealth, onAnswer }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswer = (isCorrect) => {
        onAnswer(isCorrect);
        setCurrentQuestion((currentQuestion + 1) % questions.length);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
            <div className="flex w-full justify-around mb-8">
                <Player name="Player" health={playerHealth} avatar="./PYTHON - 1.jpg" />
                <Player name="Enemy" health={enemyHealth} avatar="./JAVA - 1.jpg" />
            </div>
            <Question
                question={questions[currentQuestion]}
                options={questions[currentQuestion].options}
                onAnswer={handleAnswer}
            />
        </div>
    );
};

export default Battle;
