import elemntsListObj from "../../global/dom-el";
import userStepsTraker from "./1_cell-traker";
import styleSwitcher from "./2_cells-style-changer";
import audioClick from "./3_click-audio-effect";
import gameGridDataObj from "../../global/game-grid-data";
import startTimer from "../game-timer/0_timer";
import saveGameResult from "../result-list-creator/1_list-result-creator";

//imports from tempuaray methods 
import {tempData} from "../game-finish/temp-validator/temp-answer-obj";
import { answerValidater } from "../game-finish/temp-validator/tem-answ-validator";
//to show  result message
import modalWinToggler from "../game-finish/1_result-modal-win-toggler";

const attachEventListeners = function () {
  // clear arrOfCoordinates dureing reattachment
  gameGridDataObj.cellCoordinates = [];
  // remove context menu
  document.addEventListener("contextmenu", (event) => {
    elemntsListObj.cells.forEach((cell) => {
      if (cell.contains(event.target)) {
        event.preventDefault();
      }
    });
  });
  // cell handler for both btns
  elemntsListObj.cells.forEach((cell, i) => {
    cell.addEventListener("mousedown", (event) => {
      if (event.button === 0) {
        audioClick(true, false);
        userStepsTraker(i, true, false);
        styleSwitcher(event, i, true, false);
        //activate timer
        startTimer(true);
        //temp function for validaton answer 
        answerValidater()
        if (tempData.isRight) {
        modalWinToggler(true)
        saveGameResult()
        }
      } else if (event.button === 2) {
        audioClick(false, true);
        userStepsTraker(i, false, true);
        styleSwitcher(event, i, false, true);
        //activate timer
        startTimer(true);
      }
    });
  });
};

attachEventListeners();
export default attachEventListeners;
