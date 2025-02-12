import configGame from "../../global/config-game-data.js";
import gameGridDataObj from "../../global/game-grid-data.js";

//main function to applay auxiliary functions write coordinates or remove
const userStepsTraker = function (currIndex, isAddData, isRemoveData) {
  if (isAddData && !isRemoveData) {
    const coordinates = addCoordinates(currIndex);
    if (coordinates) {
      gameGridDataObj.cellCoordinates.push(coordinates);
    }
  } else {
    removeCoordinates(currIndex);
  }
 // console.log(gameGridDataObj.cellCoordinates)
};
//coordinate writer
const addCoordinates = (currIndex) => {
  const cellCoordinatesObj = getCoordinates(currIndex);
  const isCoordinatesExist = checkData(cellCoordinatesObj);
  if (!isCoordinatesExist) {
    gameGridDataObj.cellCoordinates.push(cellCoordinatesObj);
  } else {
    // if btn pushed second time  remove the index
    removeCoordinates(currIndex);
  }
};
//remove coordinates
const removeCoordinates = (currIndex) => {
  const cellCoordinatesObj = getCoordinates(currIndex);
  const isCoordinatesExist = checkData(cellCoordinatesObj);
  if (isCoordinatesExist) {
    const indexOfRemoveingElement = gameGridDataObj.cellCoordinates.findIndex(
      (el) =>
        el.row === cellCoordinatesObj.row && el.col === cellCoordinatesObj.col
    );
    if (indexOfRemoveingElement >= 0) {
      gameGridDataObj.cellCoordinates.splice(indexOfRemoveingElement, 1);
    }
  } else {
    return;
  }
};
//auxiliary functions
//get sorce index of cell to convert into coordinates row and col
export const getCoordinates = (currIndex) => {
  let cellCoordinates = {};
  const rowIndex = Math.floor(currIndex / configGame.fieldSize);
  const cellIndex = currIndex % configGame.fieldSize;
  cellCoordinates.row = rowIndex;
  cellCoordinates.col = cellIndex;
  return cellCoordinates;
};
//chec wheather there are curr cooredinates in data array
export const checkData = (sourceDataObj) => {
  if (gameGridDataObj.cellCoordinates !== 0) {
    if (
      gameGridDataObj.cellCoordinates.some(
        (el) => el.row === sourceDataObj.row && el.col === sourceDataObj.col
      )
    ) {
      return true; // can't write coordinates
    } else {
      return false; // write coordinates
    }
  } else {
    return false; // write coordinates
  }
};

export default userStepsTraker;
