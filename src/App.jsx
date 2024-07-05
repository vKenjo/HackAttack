import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SinglePlayerFrame from './components/Layout/SinglePlayerFrame';
import LanguageTopics from './components/SP/LanguageTopics';
import MultiPlayerFrame from "./components/Layout/MultiPlayerFrame.jsx";

const Home = () => (
  <>
    <Hero />
    <Footer />
  </>
);

const SinglePlayer = () => (
    <div className='flex flex-col h-screen justify-between'>
        <Header/>
        <SinglePlayerFrame/>
        <Footer/>
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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SinglePlayer" element={<SinglePlayer />} />
        <Route path="/Multiplayer" element={<MultiPlayer />} />
        <Route path="/language/:id" element={<LanguageTopics />} />
        <Route path="/language/:id/topic/learn" element={<Learn />} />
      </Routes>
    </Router>
  );
};

export default App;
