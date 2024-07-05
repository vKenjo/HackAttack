import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SinglePlayerFrame from './components/Layout/SinglePlayerFrame';
import LanguageTopics from './components/SP/LanguageTopics';
import HeroMP from './components/MP/Hero.jsx'
import MultiPlayerFrame from "./components/Layout/MultiPlayerFrame.jsx";

const Home = () => (
    <div className='flex flex-col h-screen justify-between'>
        <Header/>
        <Hero/>
        <Footer/>
    </div>
);

const SinglePlayer = () => (
    <div className='flex flex-col h-screen justify-between'>
        <Header/>
        <SinglePlayerFrame/>
        <Footer/>
    </div>
);

const MultiPlayer = () => (
    <div className='flex flex-col h-screen justify-between'>
        <Header/>
        <MultiPlayerFrame/>
        <Footer/>
    </div>
);

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/singleplayer" element={<SinglePlayer/>}/>
                <Route path="/multiplayer" element={<MultiPlayer/>}/>
                <Route path="/language/:id" element={<LanguageTopics/>}/>
            </Routes>
        </Router>
    );
};

export default App;
