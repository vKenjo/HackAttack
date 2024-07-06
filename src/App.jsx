import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomeFrame from './components/HomeFrame';
import Footer from './components/Footer';
import SinglePlayerFrame from './components/Layout/SinglePlayerFrame';
import LanguageTopics from './components/SP/LanguageTopics';
import Learn from './components/SP/topic/Learn';
import LearnFrame from './components/Pages/LearnFrame';
import QuizFrame from './components/Pages/QuizFrame';
import Quiz from './components/SP/topic/Quiz/Quiz';
import Result from './components/SP/topic/Quiz/Result';
import MultiPlayerFrame from './components/Layout/MultiPlayerFrame';
import Battle from './components/MP/Battle'; // Import Battle component
import Confirm from './components/MP/Confirm'; // Import Confirm component
import Win from './components/MP/Win'; // Import Win component
import Lose from './components/MP/Lose'; // Import Lose component

const Home = () => <HomeFrame />;

const SinglePlayer = () => <SinglePlayerFrame />;

const MultiPlayer = () => <MultiPlayerFrame />;

const App = () => {
    const [playerHealth, setPlayerHealth] = useState(5);
    const [enemyHealth, setEnemyHealth] = useState(5);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setEnemyHealth(prev => prev - 1);
        } else {
            setPlayerHealth(prev => prev - 1);
        }
    };

    return (
        <Router>
            <div className='flex flex-col h-screen justify-between'>
                <Header />
                <div className='flex-auto'>
                    <div className='bg-[url("/GENERAL/BACKGROUND_ONLY.svg")] bg-cover bg-fixed h-full'>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/singleplayer" element={<SinglePlayer />} />
                            <Route path="/multiplayer" element={<MultiPlayer />} />
                            <Route path="/language/:id" element={<LanguageTopics />} />
                            <Route path="/language/:id/topic/learn" element={<Learn />} />
                            <Route path="/language/:id/topic/learn/frame" element={<LearnFrame />} />
                            <Route path="/language/:id/topic/quiz/*" element={<QuizFrame />} />
                            <Route path="/language/:id/topic/quiz" element={<Quiz />} />
                            <Route path="/result" element={<Result />} />
                            <Route path="/confirm" element={<Confirm />} /> {/* Route for Confirm */}
                            <Route path="/battle" element={
                                <Battle
                                    playerHealth={playerHealth}
                                    enemyHealth={enemyHealth}
                                    onAnswer={handleAnswer}
                                />
                            } /> {/* Route for Battle */}
                            <Route path="/win" element={<Win />} /> {/* Route for Win */}
                            <Route path="/lose" element={<Lose />} /> {/* Route for Lose */}
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
