import configGame from "../../global/config-game-data";

const decipherDataObj = {
  emptyMatrix: JSON.parse(JSON.stringify(configGame.emptyMatrix)), // create copy of matrix
  formattedHints: {},
  indexTopHints: 0
};

const decipher = function () {
  formatHintsBlock();
  decipherDataObj.formattedHints = formatHintsBlock();
  sortFormatedHintBloks(); // sort format hints into right order from the biggest one to the lowest one 
  console.log(decipherDataObj.formattedHints)
  //! Recurcive func to apply hints 
  applyHints(decipherDataObj.formattedHints, decipherDataObj.emptyMatrix)
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
  let keyIndex = 0;// index to chose right key for sectionArr hintKeys[keyIndex]
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
        const currHint = row[col]
          if (typeof currHint === 'number') {// checkin  for removeing all element that not equal to number type
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
    decipherDataObj.formattedHints[k] = indexesOfBlocks.map(obj => {
     return { block: currArrOfHintBlocks[obj.index], blockIndex:obj.index}
    }) 
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
console.log(matrix)
const topSection = hintsSection.topHints
const bottomSection = hintsSection.bottomHints

//* create sub recurcive func to iterate top hints
const topHintsApplier = function (index, topSection, matrix) {
//* recurcive restriction
if (index === topSection.length) {
    return
}
// for comfotable work with date
const blockIndex = topSection[index].blockIndex
const curBlockOfHints = topSection[index].block
//  for comfotable work  determine height and length of matrix
const maxHeight = matrix.length
const maxWidth = matrix[0].length
console.log(maxWidth, maxHeight)

curBlockOfHints.forEach(hint => {
  for(let j = 0; j < hint; j++) {
   if (curBlockOfHints.length === 1) { //check amount of hint to understand wheather i nedd ofssets or not 
   matrix[j][blockIndex] = 'true'
  }else { // if amount of hint more than one 
     if (matrix[j][blockIndex] === 'true' ) {
      if (j+2 < maxHeight) { //* !further it can be problem becouse this checking may call mistakes
        matrix[j+2][blockIndex] = 'true'
      }else {
        matrix[j+1][blockIndex] = 'true'
      }
     }else {
       matrix[j][blockIndex] = 'true'
     }
     }
  }
})

console.table(matrix)
//* add index + 1 to call recurcion again
index ++
topHintsApplier(index, topSection, matrix)
}


topHintsApplier (decipherDataObj.indexTopHints /*global storage for index counter*/, topSection, matrix) 




//* create sub recurcive func to iterate bottom hitns
const bottomHintsApplier = function (bottomSection, matrix) {

}

}





export default decipher;
