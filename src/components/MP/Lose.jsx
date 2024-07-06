import React from 'react';
import { useNavigate } from 'react-router-dom';

const Lose = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-200">
            <h1 className="text-4xl font-bold text-red-700 mb-8">You Lose!</h1>
            <button
                onClick={() => navigate('/')}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
                Go to Home
            </button>
        </div>
    );
};

export default Lose;
