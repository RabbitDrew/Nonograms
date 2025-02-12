import elemntsListObj from "../../global/dom-el";
import dataTimerObj from "../../global/game-data-timer";
//filter right elements
const timeMinAndSec = Array.from(elemntsListObj.timer).filter((timeTitel) => {
  if (timeTitel.textContent === "00") {
    return timeTitel;
  }
});
//time engine
const startTimer = function (isTimerOn) {
  let getTime = new Date().getTime() / 1000;
  let min = 0;
  let sec = 0;
  // check switcher is timer === false clear id setinterval
  if (!isTimerOn) {
    if (dataTimerObj.isTimerActive) {
      clearInterval(dataTimerObj.isTimerActive);
      dataTimerObj.isTimerActive = null;
    }
    min = 0;
    sec = 0;
    dataTimerObj.min = min.toString().padStart(2, "0");
    dataTimerObj.sec = sec.toString().padStart(2, "0");
    renderTme(isTimerOn);
    return;
  }
  // else add set interval to  dataTimerObj.isTimerActive
  if (!dataTimerObj.isTimerActive) {
    dataTimerObj.isTimerActive = setInterval(() => {
      if (dataTimerObj.min < 99) {
        if (dataTimerObj.sec < 60) {
          sec = Math.floor(new Date().getTime() / 1000 - getTime);
          dataTimerObj.sec = sec.toString().padStart(2, "0");
        } else {
          getTime = new Date().getTime() / 1000;
          min += 1;
          dataTimerObj.min = min.toString().padStart(2, "0");
          sec = 0;
          dataTimerObj.sec = sec.toString().padStart(2, "0");
        }
      } else {
        getTime = new Date().getTime() / 1000;
        min = 0;
        dataTimerObj.min = min.toString().padStart(2, "0");
        sec = 0;
        dataTimerObj.sec = sec.toString().padStart(2, "0");
      }
      //console.log(dataTimerObj.min, dataTimerObj.sec);
      renderTme(isTimerOn);
    }, 1001);
  }
};
//time rendering
const renderTme = function (isTimerOn) {
  if (isTimerOn) {
    const timeArr = [
      ...dataTimerObj.min.split(" "),
      ...dataTimerObj.sec.split(" "),
    ];
    timeMinAndSec.every((timeTitel, i) => {
      return (timeTitel.textContent = timeArr[i]);
    });
  } else {
    timeMinAndSec.every((timeTitel) => {
      return (timeTitel.textContent = "00");
    });
  }
};

export default startTimer;
