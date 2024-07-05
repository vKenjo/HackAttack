// components/Pages/BattleFrame.jsx
import React, { useState } from 'react';
import Player from '../MP/Player';
import Question from '../MP/Question';
import Win from '../MP/Win';
import Lose from '../MP/Lose';

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

const BattleFrame = () => {
    const [playerHealth, setPlayerHealth] = useState(5);
    const [enemyHealth, setEnemyHealth] = useState(5);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [turn, setTurn] = useState('player'); // 'player' or 'enemy'

    const handleAnswer = (isCorrect) => {
        if (turn === 'player' && isCorrect) {
            setEnemyHealth(enemyHealth - 1);
        } else if (turn === 'enemy' && isCorrect) {
            setPlayerHealth(playerHealth - 1);
        }
        setTurn(turn === 'player' ? 'enemy' : 'player');
        setCurrentQuestion((currentQuestion + 1) % questions.length);
    };

    if (playerHealth <= 0) return <Lose />;
    if (enemyHealth <= 0) return <Win />;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
            <div className="grid grid-cols-2 gap-4 w-full max-w-3xl mb-8">
                <Player name="Player" health={playerHealth} avatar="/path/to/player-avatar.png" />
                <Player name="Enemy" health={enemyHealth} avatar="/path/to/enemy-avatar.png" />
            </div>
            <Question
                question={questions[currentQuestion]}
                options={questions[currentQuestion].options}
                onAnswer={handleAnswer}
            />
        </div>
    );
};

export default BattleFrame;
