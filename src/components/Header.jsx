import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="w-screen bg-gray-800 text-white h-20 flex justify-center sticky ">
            <div className="h-auto m-auto w-8/12 flex justify-between align-middle items-center">

                    <img className='h-32' src='/GENERAL/LOGO.svg'/>

                <nav>
                    <ul className="flex space-x-20 text-xl ">
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
