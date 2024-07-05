import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import HeroMP from './components/MP/Hero.jsx';

const Home = () => (
    <>
        <Header/>
        <Hero/>
        <Footer/>
    </>
);

const SinglePlayer = () => (
    <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold mb-4">Singleplayer</h1>
        <p className="text-lg">This is the Singleplayer page.</p>

    </div>
);

const MultiPlayer = () => (
    <>
        <div className="container mx-auto py-20">
            <h1 className="text-4xl font-bold mb-4">Multiplayer</h1>
            <p className="text-lg">This is the Multiplayer page.</p>
        </div>
        <HeroMP title={'Multiplayer'} subtitle={'This is the Multiplayer page.'} />
    </>
);

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/singleplayer" element={<SinglePlayer/>}/>
                <Route path="/multiplayer" element={<MultiPlayer/>}/>
            </Routes>
        </Router>
    );
};

export default App;
