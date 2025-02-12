import { tempData } from "../game-finish/temp-validator/temp-answer-obj";
import elemntsListObj from "../../global/dom-el";
import configGame from "../../global/config-game-data";
const showSolution = function() {
 const soultionIndexes = tempData.coordinates.map(obj => {
    return obj.row * configGame.fieldSize + obj.col
 })
console.log (soultionIndexes)
 elemntsListObj.cells.forEach((cell, i) => {
   if(soultionIndexes.includes(i)) {
      cell.style.backgroundColor = 'var(--hover-color)'
   }
 })
}


export default showSolution