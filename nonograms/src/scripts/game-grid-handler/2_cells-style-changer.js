import createElement from "../../global/element-creater";
import renderElement from "../../global/element-rendering";
import { getCoordinates, checkData } from "./1_cell-traker";

const styleSwitcher = function (cell, currInd, isLeftBtn, isRightBtn) {
  if (isLeftBtn && !isRightBtn) {
    changeBtnBg(cell, currInd);
  } else {
    addCellMark(cell, currInd);
  }
};

const changeBtnBg = function (event, currInd) {
  let cell = event.currentTarget;
  cell.innerHTML = "";
  const cellCoordinates = getCoordinates(currInd);
  const isCurrSellPushed = checkData(cellCoordinates);
  if (isCurrSellPushed) {
    cell.style.backgroundColor = "var(--hover-color)";
  } else {
    cell.style.backgroundColor = "var(--grid-bg-color)";
  }
};

const addCellMark = function (event, currInd) {
  const cellCoordinates = getCoordinates(currInd);
  const isCurrSellPushed = checkData(cellCoordinates);
  let cell = event.currentTarget;
  const cellTitle = cell.querySelector(".cell-title");
  if (!isCurrSellPushed) {
    if (!cellTitle) {
      cell.innerHTML = "";
      cell.style.backgroundColor = "var(--grid-bg-color)";
      const createCellTitle = createElement("h2", "cell-title");
      createCellTitle.textContent = "X";
      renderElement(cell, createCellTitle);
    } else {
      cell.style.backgroundColor = "var(--grid-bg-color)";
      cell.innerHTML = "";
    }
  }
};

export default styleSwitcher;
