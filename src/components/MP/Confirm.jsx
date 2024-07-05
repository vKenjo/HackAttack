import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSlide } = location.state || {};

  if (!selectedSlide) {
    return <p>No slide selected.</p>;
  }

  const handleConfirm = () => {
    navigate('/battle');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('/GENERAL/BACKGROUND_ONLY.svg')] bg-cover bg-fixed text-white">
      <div className="bg-black bg-opacity-75 p-6 rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Are you ready for battle?</h1>
        <p className="text-lg mb-6">Confirm to proceed to the battle arena.</p>
        <div className="mb-4">
          <img src={selectedSlide.image} alt={selectedSlide.title} className="w-32 h-32 object-cover rounded-lg mx-auto" />
          <h2 className="text-2xl mt-2">{selectedSlide.title}</h2>
          <p>{selectedSlide.description}</p>
        </div>
        <button
          onClick={handleConfirm}
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Confirm;
