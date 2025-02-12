import pageModalWin from "../../layout/2_2_main-modal-win";
import { tempData } from "./temp-validator/temp-answer-obj";
import gameGridDataObj from "../../global/game-grid-data";
import elemntsListObj from "../../global/dom-el";

const modalWinToggler = function (shouldWinOpen) {
  if (gameGridDataObj.cellCoordinates.length > 0) {
    // to work in case if one input has been happend
    if (shouldWinOpen) {
      //get time
      let finishTime = "";
      elemntsListObj.timer.forEach((time) => (finishTime += time.textContent));
      // set result when the game is finished
      if (tempData.isRight) {
        pageModalWin("Great !", finishTime);
      } else {
        pageModalWin("Don't worry,try again!", finishTime);
      }
    } else {
      const getPageModal = document.querySelector(".page-modal");
      getPageModal.classList.add("modal--close");
      setTimeout(() => {
        getPageModal.remove();
      }, 490);
    }
  }
};

export default modalWinToggler;
