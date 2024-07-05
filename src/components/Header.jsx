import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-screen bg-gray-800 text-white min-h-20 flex justify-center sticky ">
      <div className="h-fit m-auto w-8/12 flex justify-between align-middle">
      <div className="flex space-x-4">
      <h1 className="text-2xl font-bold">Insert Logo Here</h1>
      <h1 className="text-2xl">Hi, TechieKid</h1>
      </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-500 ">Home</Link></li>
            <li><Link to="/singleplayer" className="hover:text-gray-500">Singleplayer</Link></li>
            <li><Link to="/multiplayer" className="hover:text-gray-500">Multiplayer</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
