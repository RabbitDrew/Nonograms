import resultSorageObj from "../../global/game-result-storage";
import elemntsListObj from "../../global/dom-el";
import configGame from "../../global/config-game-data";

const saveGameResult = function () {
    const resultData = {
        level: '',
        theme: '',
        time: '',
    }

    let time = '' 
    elemntsListObj.timer.forEach(title => time += title.textContent)

    resultData.level =configGame.level
    resultData.theme = configGame.theme
    resultData.time = time

    if (resultSorageObj.resultList.length < 5) {
        resultSorageObj.resultList.unshift(resultData)
    }else {
        resultSorageObj.resultList.splice(-1)
        resultSorageObj.resultList.unshift(resultData)
    }

    saveDataInlocalStorage()
}
const saveDataInlocalStorage = function () {
    localStorage.setItem('resultData', JSON.stringify(resultSorageObj.resultList))
}

export default saveGameResult