import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import SinglePlayerFrame from './components/Layout/SinglePlayerFrame';

const Home = () => (
  <>
    <Hero />
    <Footer />
  </>
);

const SinglePlayer = () => (
  <SinglePlayerFrame /> // Render SinglePlayerFrame component here
);

const MultiPlayer = () => (
  <div className="container mx-auto py-20">
    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
    <p className="text-lg">This is the Contact page.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SinglePlayer" element={<SinglePlayer />} /> 
        <Route path="/Multiplayer" element={<MultiPlayer />} />
      </Routes>
    </Router>
  );
};

export default App;
