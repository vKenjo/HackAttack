import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomeFrame from './components/HomeFrame.jsx';
import Footer from './components/Footer';
import SinglePlayerFrame from './components/Layout/SinglePlayerFrame';
import LanguageTopics from './components/SP/LanguageTopics';
import Learn from './components/SP/topic/Learn';
import LearnFrame from './components/Pages/LearnFrame';
import QuizFrame from './components/Pages/QuizFrame';
import Quiz from './components/SP/topic/Quiz/Quiz';
import Result from './components/SP/topic/Quiz/Result';
import MultiPlayerFrame from './components/Layout/MultiPlayerFrame';
import BattleFrame from './components/Pages/BattleFrame'; // Import BattleFrame component
import Confirm from './components/MP/Confirm'; // Import Confirm component

const Home = () => <HomeFrame />;

const SinglePlayer = () => (
    <SinglePlayerFrame />
);

const MultiPlayer = () => <MultiPlayerFrame />;

const App = () => {
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
                            <Route path="/battle" element={<BattleFrame />} /> {/* Route for BattleFrame */}
                            <Route path="/confirm" element={<Confirm />} /> {/* Route for Confirm */}
                        </Routes>
                    </div>
                </div>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
