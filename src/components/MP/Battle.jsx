import React, { useState } from 'react';
import Player from './Player';
import Question from './Question';
import { useNavigate } from 'react-router-dom';

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
    const [playerDamaged, setPlayerDamaged] = useState(false);
    const [enemyDamaged, setEnemyDamaged] = useState(false);
    const navigate = useNavigate();

    const handleAnswer = (isCorrect) => {
        if (turn === 'player' && isCorrect) {
            setEnemyDamaged(true);
            setTimeout(() => setEnemyDamaged(false), 2000); // Reset damage indicator after 2 seconds
            setEnemyHealth(prev => prev - 1);
        } else if (turn === 'enemy' && isCorrect) {
            setPlayerDamaged(true);
            setTimeout(() => setPlayerDamaged(false), 2000); // Reset damage indicator after 2 seconds
            setPlayerHealth(prev => prev - 1);
        }
        setTurn(turn === 'player' ? 'enemy' : 'player');
        setCurrentQuestion((currentQuestion + 1) % questions.length);
    };

    if (playerHealth <= 0) navigate('/lose');
    if (enemyHealth <= 0) navigate('/win');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/GENERAL/BACKGROUND_FIGHT.svg')] bg-cover bg-fixed text-white">
            <div className="flex w-full justify-around mb-8">
                <Player name="Player" health={playerHealth} avatar="./PYTHON.svg" isDamaged={playerDamaged} />
                <Player name="Enemy" health={enemyHealth} avatar="./JAVA.svg" isDamaged={enemyDamaged} />
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
