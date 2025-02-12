import configGame from "../../global/config-game-data";
import gameDataList from "../../global/game-data-list";
const levelSwitcher = function (event) {
  const getLevel = document.querySelectorAll(".difficulty-list-item-title");
  if (getLevel && getLevel.length !== 0) {
    const levelKey = Array.from(getLevel).find(
      (el) => el.textContent.trim() === event.target.textContent.trim()
    ).textContent;
    configGame.level = levelKey
    configGame.levelArr = gameDataList[levelKey];
    configGame.gameThemeObj = gameDataList[levelKey][0];
  } else {
    return;
  }
};

export default levelSwitcher;
