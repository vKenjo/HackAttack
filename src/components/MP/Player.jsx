// components/Player.jsx
import React from 'react';

const Player = ({ name, health, avatar }) => {
    return (
        <div className="text-center">
            <img src={avatar} alt={`${name} avatar`} className="mx-auto w-24 h-24" />
            <h2 className="text-xl font-bold">{name}</h2>
            <div className="flex justify-center">
                {[...Array(health)].map((_, i) => (
                    <span key={i} className="text-red-500 text-3xl">❤️</span>
                ))}
            </div>
        </div>
    );
};

export default Player;
