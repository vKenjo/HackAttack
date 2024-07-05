import React from "react";

const Player = () => {
    let health = 100;
    return (
        <div id='player'>
            <div id='avatar'>

            </div>
            <div id='healthBar' className=''>
                <icon> </icon>
                <div id='health'> </div>
            </div>
        </div>
    );
};

export default Player;
