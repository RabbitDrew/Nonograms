//logic for open and close dropdowns 
// TODO rework the function  remov extra vareables 
// TODO  rewrite this part  const creaDropDown = difficulty? difficultyList(): themeList(configGame.levelArr); // if(mousenter theme header item open current theme list)
import renderElement from "../../global/element-rendering";
import difficultyList from "../../layout/1_1_difficulty-list";
import themeList from "../../layout/1_2_theme-list";
import configGame from "../../global/config-game-data";

export const dropdownOpen = function (event, difficulty, theme) {
  const getDropDown = document.querySelector(".nav-item-difficulty-list");
  const getElement = event.currentTarget;
  const styleLine = getElement.querySelector(".style-line");
  if (getElement && !getDropDown) {
    const creaDropDown = difficulty? difficultyList(): themeList(configGame.levelArr); // if(mousenter theme header item open current theme list)
    if (styleLine && !styleLine.classList.contains("style-line--expand")) {
      styleLine.classList.remove("style-line-wrap");
      styleLine.classList.add("style-line--expand");
    }
    renderElement(getElement, creaDropDown);
  }
};

export const dropdownClose = function (event, difficulty, theme) {
  const getElement = event.currentTarget;
  const styleLine = getElement.querySelector(".style-line");
  const getDropDown = difficulty
    ? document.querySelector(".nav-item-difficulty-list")
    : document.querySelector(".nav-item-theme-list");

  if (styleLine && !styleLine.classList.contains("style-line-wrap")) {
    styleLine.classList.remove("style-line--expand");
    styleLine.classList.add("style-line-wrap");
  }
  getDropDown.classList.add("close-list");
  getDropDown.remove();
};
