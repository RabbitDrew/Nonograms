import configGame from "../../global/config-game-data";

const sizeFieldSwitcher = function (event) {
  const getLevel = document.querySelectorAll(".difficulty-list-item-title");
  if (getLevel && getLevel.length !== 0) {
    const levelArrIndex =
      Array.from(getLevel).findIndex(
        (el) => el.textContent.trim() === event.target.textContent.trim()
      ) + 1;
    configGame.fieldSize = 5 * levelArrIndex;
  } else {
    return;
  }
};

export default sizeFieldSwitcher;
