import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import "./GamePlay.css"

const GamePlay = () => {
    return (
        <>
            <div className='upperSection'>
                <TotalScore></TotalScore>
                <NumberSelector></NumberSelector>
            </div>
        </>
    )
}

export default GamePlay
