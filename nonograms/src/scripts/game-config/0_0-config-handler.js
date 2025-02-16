import configGame from "../../global/config-game-data";
import levelSwitcher from "./1_0_level-switcher";
import themeSwitcher from "./1_1_theme-switcher";
import sizeFieldSwitcher from "./2_field-size-switcher";
import gameGridCreator from "../../layout/2_1_main-grid-layout-creator";

import decipher from "../decode/1_decipher";

//for reattaching the handlerы to update game field according new level and theme
import attachEventListeners from "../game-grid-handler/0_cell-handler";



//* tempruary functions to validate prepeared answer with  answer that has been got from user
//temp func !!!
import {
  findStartLevelTheme,
  findTheme,
  converCoordinates,
} from "../game-finish/temp-validator/tem-answ-validator";
converCoordinates(); // conver cordinatest of answer matrix for start theme
//----




document.addEventListener("click", (event) => {
  if (event.target.closest(".difficulty-list-item-title")) {
    levelSwitcher(event);
    configGame.fieldSize = sizeFieldSwitcher(event);
    gameGridCreator(configGame.fieldSize, configGame.gameThemeObj);
    
  
    // temp func !!!
    findStartLevelTheme(event);
    converCoordinates();
    //-----------------

    attachEventListeners();
  } else if (event.target.closest(".theme-list-item-title")) {
    themeSwitcher(event);
    gameGridCreator(configGame.fieldSize, configGame.gameThemeObj);

    decipher();

    // temp func !!!
    findTheme(event);
    converCoordinates();
    //-----------------

    attachEventListeners();
  } else {
    return;
  }
});

// to adjust  top/left game field block
import { applySizeOfThemeSection } from "../../layout/2_1_main-grid-layout-creator";

window.addEventListener("resize", (event) => {
  let pageWidth = window.innerWidth;
  // resize top left block of the game field
  // to adjust style of the whole grid
  if (pageWidth > 930) {
    applySizeOfThemeSection(82, 81);
  } else if (pageWidth > 840 && pageWidth <= 930) {
    applySizeOfThemeSection(72, 71);
  } else if (pageWidth > 640 && pageWidth <= 840) {
    applySizeOfThemeSection(52, 25);
  } else if (pageWidth <= 640) {
    applySizeOfThemeSection(32, 32);
  }
});
