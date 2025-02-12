//for rendring them list in real time 
// according to difficulty level theme list is changed in adopt menu
import configGame from "../../global/config-game-data";
const rerenderThemeList = function () {
  const getThemeTitles = document.querySelectorAll(".theme-list-item-title");
  if (getThemeTitles.length !== 0) {
    const themeArr = configGame.levelArr.map((obj) => obj.gameTheme);
    getThemeTitles.forEach((title, i) => {
      title.textContent = themeArr[i];
    });
  }
};

export default rerenderThemeList;
