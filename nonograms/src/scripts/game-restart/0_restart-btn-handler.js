import elemntsListObj from "../../global/dom-el";
import restartTheGame from "./1_restart";
import startTimer from "../game-timer/0_timer";

const btnTitle = 'Restart the game'
const restartBtn = Array.from(elemntsListObj.gameBtns).find(btn => {
    return btn.querySelector('.interface-btn-title').textContent.toLowerCase().trim() === btnTitle.toLowerCase().trim()
})

restartBtn.addEventListener('click', (event) => {
    restartTheGame(event)
    startTimer(false)
})