import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import HomeFrame from './components/HomeFrame.jsx';
import Footer from './components/Footer';
import SinglePlayerFrame from './components/Layout/SinglePlayerFrame';
import LanguageTopics from './components/SP/LanguageTopics';
import Learn from './components/SP/topic/Learn';
import LearnFrame from './components/Pages/LearnFrame';
import QuizFrame from './components/Pages/QuizFrame';
import Quiz from './components/SP/topic/Quiz/Quiz'; // Import Quiz Component
import Result from './components/SP/topic/Quiz/Result';
import MultiPlayerFrame from './components/Layout/MultiPlayerFrame';

const Home = () => <HomeFrame/>;

const SinglePlayer = () => (
    <SinglePlayerFrame />
);

const MultiPlayer = () => <MultiPlayerFrame/>;

const App = () => {
    return (
        <Router>
            <div className='flex flex-col h-screen justify-between'>
                <Header/>
                <div className='flex-auto'>
                <div className='bg-[url("/GENERAL/BACKGROUND_ONLY.svg")] bg-cover bg-fixed h-full'>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/singleplayer" element={<SinglePlayer/>}/>
                        <Route path="/multiplayer" element={<MultiPlayer/>}/>
                        <Route path="/language/:id" element={<LanguageTopics/>}/>
                        <Route path="/language/:id/topic/learn" element={<Learn/>}/>
                        <Route path="/language/:id/topic/learn/frame" element={<LearnFrame/>}/>
                        <Route path="/language/:id/topic/quiz/*" element={<QuizFrame/>}/>
                        <Route path="/language/:id/topic/quiz" element={<Quiz/>}/> {/* Route for Quiz Component */}
                        <Route path="/result" element={<Result/>}/>
                    </Routes>
                    </div>
                </div>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
