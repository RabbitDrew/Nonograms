//storage fot game configurtion level, theme and field size 
import gameDataList from "./game-data-list"
import createEmptyMatrix from "../scripts/decode/0_matrix-creator"
const configGame = {
    level: 'easy',//storgae of level title for localStorage 
    theme: 'flag', // storage of theme title for locla storage
    levelArr: gameDataList['easy'],// start arr of theme (starts from easy level)
    gameThemeObj: gameDataList['easy'][0], // start theme obj
    fieldSize: 5,//start field size 
    emptyMatrix: createEmptyMatrix(5) // key to store emty matrix for decipher size depends on difficulty level
}
export default configGame