// TODO -- create decipher insetad of this supid method

import { answerList, tempData } from "./temp-answer-obj";
import gameGridDataObj from "../../../global/game-grid-data";

// find start Theme
export const findStartLevelTheme = function (event) {
  let getLevelTitle =
    event.target.closest(".difficulty-list-item-title").textContent ||
    event.target.querySelector(".difficulty-list-item-title").textContent;
  if (getLevelTitle) {
    console.log(getLevelTitle);
    if (getLevelTitle === "easy") {
      tempData.currAnswer = answerList[0];
    } else if (getLevelTitle === "medium") {
      tempData.currAnswer = answerList[5];
    } else if (getLevelTitle === "hard") {
      tempData.currAnswer = answerList[10];
    }
    //console.log(tempData.currAnswer);
  }
};

//find theme to validate
export const findTheme = function (event) {
  let getThemeTitle =
    event.target.closest(".theme-list-item-title") ||
    event.target.querySelector(".theme-list-item-title");
  if (getThemeTitle) {
    tempData.currAnswer = answerList.find((answerObj) => {
      return answerObj.gameTheme.trim() === getThemeTitle.textContent.trim();
    });
  }
};
// prepare coordinate to compair
export const converCoordinates = function () {
  const coordinates = [];
  for (let row = 0; row < tempData.currAnswer.answer.length; row++) {
    for (let col = 0; col < tempData.currAnswer.answer[row].length; col++) {
      if (tempData.currAnswer.answer[row][col] === 1) {
        coordinates.push({ row: row, col: col });
      }
    }
  }
  tempData.coordinates = coordinates;
 // console.log(tempData.coordinates);
};
//validate answer
export const answerValidater = function () {
  let result = false;
  if (tempData.coordinates.length === gameGridDataObj.cellCoordinates.length) {
    result = tempData.coordinates.every((block) => {
      return gameGridDataObj.cellCoordinates.some((answerBlock) => {
        return block.row === answerBlock.row && block.col === answerBlock.col;
      });
    });
    tempData.isRight = result;
   // console.log(tempData.isRight);
  }else {
    tempData.isRight = result;
   // console.log(tempData.isRight);
  }
};
