import React from 'react'
import HeroMP from "../MP/Hero.jsx";

const MultiPlayerFrame = () => {
  return (
      <div>
        <div className="container mx-auto py-20">
          <h1 className="text-4xl font-bold mb-4">Multiplayer</h1>
          <p className="text-lg">This is the Multiplayer page.</p>
        </div>
        <HeroMP title={'Multiplayer'} subtitle={'This is the Multiplayer page.'} />
      </div>
  )
}

export default MultiPlayerFrame