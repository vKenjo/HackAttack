import React from 'react'
import Player from './Player'
import Win from './Win'
import Lose from './Lose'

const Gameplay = () => {

const [playerToAttack, setPlayer] = useState(1)
const [healthP1, setHealthP1] = useState(100)
const [healthP2, setHealhtP2] = useState(100)


const AttackAnimation = (player) => {

    // Actual Animation

    if (player == 1) {

        // Play Animation from left to right 
    }
    else {
        // Play Animation from right to left
    }
}


const Attack = async (attackSuccess) => { 
    if (playerToAttack === 1){
        if (attackSuccess) {
                setHealhtP2(healthP2 - 50)
            }
        setPlayer(2)
    }
    else {
        if (attackSuccess) {
                setHealhtP1(healthP1 - 50)
            }
        setPlayer(1)
    }

    // Validate
    if (healthP1 <= 0 ) {
        // Route to Win or Overlay
    }
    else if (healthP2 <= 0) {
        // Route to Lose or Overlay
    }
    
}

  return (
    <>
        <div id='players'>
            <Player />
            <Player />
        </div>
        <div>
            <Question/>
        </div>
    </>
  )
}

export default Gameplay