import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-screen bg-gray-800 text-white min-h-20 flex justify-center sticky ">
      <div className="h-fit m-auto w-8/12 flex justify-between align-middle">
        <h1 className="text-2xl font-bold">Your App Name</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/singleplayer" className="hover:text-gray-400">Singleplayer</Link></li>
            <li><Link to="/multiplayer" className="hover:text-gray-400">Multiplayer</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
