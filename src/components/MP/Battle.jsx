// Battle.jsx
import React, { useState } from 'react';
import Player from './Player';
import Question from './Question';
import Win from './Win';
import Lose from './Lose';

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

const Battle = () => {
    const [playerHealth, setPlayerHealth] = useState(5);
    const [enemyHealth, setEnemyHealth] = useState(5);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [turn, setTurn] = useState('player'); // 'player' or 'enemy'

    const handleAnswer = (isCorrect) => {
        if (turn === 'player' && isCorrect) {
            setEnemyHealth(prev => prev - 1);
        } else if (turn === 'enemy' && isCorrect) {
            setPlayerHealth(prev => prev - 1);
        }
        setTurn(turn === 'player' ? 'enemy' : 'player');
        setCurrentQuestion((currentQuestion + 1) % questions.length);
    };

    if (playerHealth <= 0) return <Lose />;
    if (enemyHealth <= 0) return <Win />;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/GENERAL/BACKGROUND_FIGHT.svg')] bg-cover bg-fixed text-white">
            <div className="flex w-full justify-around mb-8">
                <Player name="Player" health={playerHealth} avatar="./PYTHON.svg" />
                <Player name="Enemy" health={enemyHealth} avatar="./JAVA.svg" />
            </div>
            <div className="w-full max-w-3xl">
                <Question
                    question={questions[currentQuestion]}
                    options={questions[currentQuestion].options}
                    onAnswer={(isCorrect) => handleAnswer(isCorrect)}
                />
            </div>
        </div>
    );
};

export default Battle;
