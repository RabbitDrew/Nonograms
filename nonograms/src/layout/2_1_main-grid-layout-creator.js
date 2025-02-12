import createElement from "../global/element-creater";
import renderElement from "../global/element-rendering";
import gameDataList from "../global/game-data-list";

// test
import elemntsListObj from "../global/dom-el";
import configGame from "../global/config-game-data";

const gameGridCreator = (size, themeObj) => {
  //clear block before render new grid
  elemntsListObj.gridWrapper.innerHTML = ''
  //get hints size
  const topBlock = topBlockOfGrid(themeObj);
  renderElement(elemntsListObj.gridWrapper, topBlock);
  const bottomBlock = bottomBlockOfGrid(size, themeObj);
  renderElement(elemntsListObj.gridWrapper, bottomBlock);
  applySizeOfThemeSection(82, 81);
};

const topBlockOfGrid = (themeObj) => {
  const topGrid = createElement("div", "grid-top__wrapper");
  //theme left block theme
  const gameThemeBlock = createElement("div", "top-game-theme");
  renderElement(topGrid, gameThemeBlock);
  const gameThemeTitle = createElement("h2", "game-theme-title");
  gameThemeTitle.textContent = themeObj.gameTheme;
  renderElement(gameThemeBlock, gameThemeTitle);
  //right block hints field
  const topHints = createElement("div", "top-hints");
  renderElement(topGrid, topHints);
  //create hints rows
  themeObj.topHints.forEach((currRowOfHints) => {
    const hintsRow = createElement("div", "hints-row");
    currRowOfHints.forEach((hint) => {
      const cell = createElement("div", "hint-cell");
      const cellTitle = createElement("h2", "cell-title");
      cellTitle.textContent = hint;
      renderElement(cell, cellTitle);
      renderElement(hintsRow, cell);
    });
    renderElement(topHints, hintsRow);
  });
  return topGrid;
};

const bottomBlockOfGrid = (size, themeObj) => {
  const bottomGrid = createElement("div", "grid-bottom__wrapper");
  //left lock hints field
  const hintsBlock = createElement("div", "bottom-hints");
  renderElement(bottomGrid, hintsBlock);
  themeObj.bottomHints.forEach((currCollOfHints) => {
    const hintsColl = createElement("div", "hints-coll");
    currCollOfHints.forEach((hint) => {
      const cell = createElement("div", "hint-cell");
      const cellTitle = createElement("h2", "cell-title");
      cellTitle.textContent = hint;
      renderElement(cell, cellTitle);
      renderElement(hintsColl, cell);
    });
    renderElement(hintsBlock, hintsColl);
  });
  //right block game field
  const gameGridBlock = createElement("div", "bottom-gmae-grid");
  renderElement(bottomGrid, gameGridBlock);
  for (let i = 0; i < size; i++) {
    const row = createElement("div", "grid-game-row");
    for (let j = 0; j < size; j++) {
      const cell = createElement("div", "grid-cell");
      //const cellTitle = createElement("h2", "cell-title");
     // renderElement(cell, cellTitle);
      renderElement(row, cell);
    }
    renderElement(gameGridBlock, row);
  }
  return bottomGrid;
};

//export func to adjust size of top win with theme 
export const applySizeOfThemeSection = function (minWidth, minHeight) {
  const themeBlock = document.querySelector(".top-game-theme");
  const getWidth = document.querySelector(".bottom-hints").offsetWidth;
  const getHeight = document.querySelector(".top-hints").offsetHeight;
  if (getWidth > minWidth) {
    themeBlock.style.width = getWidth + "px";
  } else {
    themeBlock.style.width = minWidth + "px";
  }

  if (getHeight > minHeight) {
    themeBlock.style.height = getHeight + "px";
  } else {
    themeBlock.style.height = minHeight + "px";
  }
};

export default gameGridCreator;

gameGridCreator(configGame.fieldSize, configGame.gameThemeObj)
