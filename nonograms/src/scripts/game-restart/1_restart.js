import gameGridDataObj from "../../global/game-grid-data";
import elemntsListObj from "../../global/dom-el";
const restartTheGame = function () {
  Array.from(elemntsListObj.cells).forEach((cell) => {
    cell.innerHTML = '';
    cell.style.backgroundColor = "var(--grid-bg-color)";
  });
  gameGridDataObj.cellCoordinates = [];
};

export default restartTheGame;
