
import "./RollDice.css"


const RollDice = ({currentDice, roleDice}) => {
    return (
        <div className='DiceContainer'>
            <div className='dice' onClick={roleDice}>
                <img src={`/dice/dice_${currentDice}.png`} alt="dice 1" />
            </div>
            <p>Click on Dice to roll</p>
        </div>
    )
}

export default RollDice
