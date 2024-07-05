import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          AppName
        </Link>
        <div>
          <Link to="/" className="mx-2">Home</Link>
          <Link to="/singleplayer" className="mx-2">Singleplayer</Link>
          <Link to="/multiplayer" className="mx-2">Multiplayer</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
