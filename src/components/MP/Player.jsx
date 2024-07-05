// Player.jsx
import React from 'react';

const Player = ({ name, health, avatar }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={avatar} alt={`${name} avatar`} className="w-32 h-32 mb-2 rounded-full object-cover" />
            <h2 className="text-xl font-bold text-center">{name}</h2>
            <div className="flex mt-2">
                {[...Array(health)].map((_, i) => (
                    <span key={i} className="text-red-500 text-3xl">❤️</span>
                ))}
            </div>
        </div>
    );
};

export default Player;
