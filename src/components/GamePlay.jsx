import React, {useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import "./GamePlay.css"
import RollDice from './RollDice'

const GamePlay = () => {
    const [score, setScore] = useState(0)
    const [selectedNumber, setSelectedNumber] = useState();
    const[currentDice, setCurrentDice] = useState(1)
    const [error, setError] = useState("")


    const generateRandomNumber = (min,max) => {
        return Math.floor(Math.random()*(max-min)+min);
    }

    const roleDice = () => {

        if(!selectedNumber){
            setError("You have not selected any number.")
            return;
        }

        const randomNumber = generateRandomNumber(1,7)
        setCurrentDice((prev) => randomNumber)

        if(selectedNumber === randomNumber){
            setScore((prev) => prev+randomNumber)
        }else{
            setScore((prev) => prev-2)
        }

        setSelectedNumber(undefined)
    }


    return (
        <>
            <div className='upperSection'>
                <TotalScore score={score}></TotalScore>
                <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}></NumberSelector>
            </div>
            <RollDice currentDice={currentDice} roleDice={roleDice}></RollDice>
        </>
    )
}

export default GamePlay
