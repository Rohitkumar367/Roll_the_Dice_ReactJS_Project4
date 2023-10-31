import React from 'react'
import "./StartGame.css"

const StartGame = ({toggleGamePlay}) => {
    return (
        <div className='container'>
            <div>
                <img src="/dices.png" alt="" />
            </div>
            <div className='content'>
                <h1>Dice Game</h1>
                <button onClick={toggleGamePlay}>Play Now</button>
            </div>
        </div>
    )
}

export default StartGame
