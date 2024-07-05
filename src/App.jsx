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


const Home = () => (
    <HomeFrame/>
);

const SinglePlayer = () => (
    <SinglePlayerFrame/>
);

const MultiPlayer = () => (
    <MultiPlayerFrame/>
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
        <Route path="/language/:id/topic/learn/frame" element={<LearnFrame />} />
        <Route path="/language/:id/topic/quiz/*" element={<QuizFrame />} />
      </Routes>
    </Router>
  );
};

export default App;