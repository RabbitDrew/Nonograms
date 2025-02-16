import configGame from "../../global/config-game-data";
import createEmptyMatrix from "./0_matrix-creator";

//*storage for temp data
const decipherDataObj = {
  matrix: [],
  formattedHints: {},
  callCount: 0,
};

const decipher = function () {
  decipherDataObj.matrix = createEmptyMatrix(configGame.fieldSize); //*every time create new matrix to update it size
  formatHintsBlock();
  decipherDataObj.formattedHints = formatHintsBlock();
  sortFormatedHintBloks(); // sort format hints into right order from the biggest one to the lowest one
  console.log(decipherDataObj.formattedHints);
  //! Recurcive func to apply hints
  applyHints(decipherDataObj.formattedHints, decipherDataObj.matrix);
};

//! Format hints into blocks explenation example:
/* 
 convrt source data hint into block 
 [['', 5], [1, 1], ['', 3],.... ] 
 for each sections of hints
     topHints: [
        ["", 1, "", 1, ""],
        [5, 1, 3, 1, 3],
      ],
      bottomHints: [
        ["", 1, "", "", ""],
        ["", 1, "", "", ""],
        [5, 1, 5, 1, 1],
      ],
 */

const formatHintsBlock = () => {
  const formattedData = {}; // temp storge for returng formated data
  const hintKeys = ["topHints", "bottomHints"]; // keys strage for sections of arrays { topHints: []; and bottomHints: []}
  let keyIndex = 0; // index to chose right key for sectionArr hintKeys[keyIndex]
  const columnCount = configGame.fieldSize; // get width of arr

  for (let key in configGame.gameThemeObj) {
    // iteraate keys of source obj
    if (Array.isArray(configGame.gameThemeObj[key])) {
      const hintBlocks = []; // sincgle arr  to store curr data - formated blocks [ [], [], []]
      const currentHintsSection = configGame.gameThemeObj[key]; // for simpler comprehension assign current matrix of hint to one variable
      //sub cycles to create small blocks of hints
      for (let col = 0; col < columnCount; col++) {
        //cycle for going through length of arr
        let block = []; // create sub block to store reformated hints
        //cycle for going through height of arrays
        currentHintsSection.forEach((row) => {
          const currHint = row[col];
          if (typeof currHint === "number") {
            // checkin  for removeing all element that not equal to number type
            block.push(row[col]);
          }
        });
        hintBlocks.push(block);
      }
      formattedData[hintKeys[keyIndex]] = hintBlocks;
      keyIndex++; // create index for getting access to hintKeys
    }
  }
  return formattedData;
};

//! Sort arr of formated hints  explenation example
/* 
sort order has to be from the biggest one to the lowest one through sum of blocks 
ccoulculate evry hint into block with each other and sort them according of sum
from: 
 [['', 5], [1, 1], ['', 3],  [1, 1], ['', 3] ] 
to 
 [['', 5] sum = 5,['', 3] sum = 3,['', 3] sum = 3, [1, 1] sum = 2,[1, 1] = sum = 2 ]
*/

const sortFormatedHintBloks = function () {
  // unfold object
  for (let k in decipherDataObj.formattedHints) {
    const indexesOfBlocks = []; //storeg for obj sorted by sum of hints in subarr that is collde blocks [ [ sum] [sum]... e.t.c]
    const currArrOfHintBlocks = decipherDataObj.formattedHints[k]; //for simplier comprihancion and readability of the code

    //cicle to sum of hints in blocks
    currArrOfHintBlocks.forEach((block, i) => {
      const obj = {}; //storga for sum and indexes
      const sum = block.reduce((acc, hint) => {
        if (typeof hint === "number") {
          return acc + hint;
        }
        return acc;
      }, 0);
      //write sum and index in the storage
      obj.sum = sum;
      obj.index = i;
      indexesOfBlocks.push(obj); // send the object in  indexesOfBlocks
    });
    indexesOfBlocks.sort((a, b) => b.sum - a.sum); // sorting objects by sum from the biggest to smallest
    //console.log(indexesOfBlocks);
    /* 
    {sum: 5, index: 0} 
    {sum: 3, index: 2}
    {sum: 3, index: 4}
    {sum: 2, index: 1}
    {sum: 2, index: 3}
    Arr of bottom hints 
    {sum: 5, index: 0}
    {sum: 5, index: 2}
    {sum: 3, index: 1}
    {sum: 1, index: 3}
    {sum: 1, index: 4}
    */
    //recreate arr of hints in setted order (objects in comments above)
    decipherDataObj.formattedHints[k] = indexesOfBlocks.map((obj) => {
      return { block: currArrOfHintBlocks[obj.index], blockIndex: obj.index };
    });
    // data is converted in next format
    /*{
    block: sorte arra in order from highest sun of hints to lowest gighe of hints
    blockIndex: it's source index of the source block to find right column or row to apply hints in matrix
    [
      {block: [5], blockIndex: 0}
      {block: [3], blockIndex: 2}
      {block: [3], blockIndex: 4} 
      {block: [1,1], blockIndex: 1}
      {block: [1,1], blockIndex: 3}
      ]
      [
      {block: [5], blockIndex: 0}
      {block: [5], blockIndex: 2}
      {block: [1,1,1], blockIndex: 1} 
      {block: [1]], blockIndex: 3}
      {block: [1], blockIndex: 4}
    ]
      } 
      */
    //go through sorted arr and take index from the object and return elements from currArrOfHints useing index obj in []
  }
};

//* rewrite the func  check bactracking
//! recursive to applyHints
const applyHints = function (hintsSection, matrix) {
  // for comfotable work with date separate variables to take arrays wit block of hints top and bottom section
  const topSection = hintsSection.topHints;
  const bottomSection = hintsSection.bottomHints;
    //check to find longest amounts of calls 
  //if one arr length longest another arr length than assight it length to veriable
  let callLimit = Math.max(topSection.length, bottomSection.length);
  


  console.log(callLimit)

  // main recursive func to apply ints
  const processHints = function (callAmount, callLimit, topSection, bottomSection, matrix) {
    //recursion limiter
    if (callAmount >= callLimit) return;
    
    if (callAmount < topSection) {
             
    }

    if (callAmount < bottomSection) {

    }


    callAmount++;
    processHints(callAmount, callLimit, matrix);
  };
  processHints(decipherDataObj.callCount, callLimit, matrix);
};

export default decipher;
