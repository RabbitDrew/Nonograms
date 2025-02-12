import configGame from "../../global/config-game-data"
import gameDataList from "../../global/game-data-list"
const themeSwitcher = function (event) {
    const getTheme = document.querySelectorAll('.theme-list-item')
    if (getTheme && getTheme.length !== 0) {
        const objIndex = Array.from(getTheme).findIndex(el => el.textContent.trim() === event.target.textContent.trim())
        configGame.gameThemeObj = configGame.levelArr[objIndex]
        configGame.theme = configGame.gameThemeObj.gameTheme
    } else {
        return
    }
}

export default themeSwitcher