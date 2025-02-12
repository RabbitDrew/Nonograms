import elemntsListObj from "../../global/dom-el";
import modalWinToggler from "./1_result-modal-win-toggler";
//function to validate temp data
import { answerValidater } from "./temp-validator/tem-answ-validator";
//restart the game
import restartTheGame from "../game-restart/1_restart";
//restart timer
import startTimer from "../game-timer/0_timer";

//clear stats on finish game btn and show the message
elemntsListObj.gameBtns[elemntsListObj.gameBtns.length - 1].addEventListener(
  "click",
  (event) => {
    startTimer(false);
    answerValidater();
    modalWinToggler(true);//checking weather answer is right or not inside the function 
  }
);

//clsoe the modal window and clear stats
// Закрываем модальное окно, очищаем статистику и останавливаем таймер
document.addEventListener("click", (event) => {
  if (event.target.closest(".game-btn-title") || 
      event.target.classList.contains("page-modal")) {
    modalWinToggler(false);
    restartTheGame();
    startTimer(false);
  }else {
    return
  }
});
