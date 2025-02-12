import elemntsListObj from "../../global/dom-el";
import adoptMenuToggler from "./1_adopt-btn-toggler";
import rerenderThemeList from "./2_rerender-game-themes";
//the rest of logic to adjust the game in the 
document.addEventListener("click", (event) => {
  const isAdoptBtnClick = event.target === elemntsListObj.adoptBtn || 
                          event.target.closest(".header-adopt-menu-btn"); // check that click was on adopt btn
  //check if the click was on the bg of adopt menu to close it 
  const isMenuOpen = elemntsListObj.adoptMenu;
  const isOutsideMenuClick = isMenuOpen && event.target.closest(".header-adopt-menu"); 
  if (isAdoptBtnClick) { // check if cklick happend on the adopt btn 
    //then check if menu is not open  than open the adopt menu
    if (isMenuOpen) {
      adoptMenuToggler(false); 
    } else { // check if menu is open than close the adopt menu panel 
      adoptMenuToggler(true);
    }
  } else if (event.target.closest(".difficulty-list-item-title")) {
    //check that difficulty was chosen and change the list of themes
    rerenderThemeList(); 
  } else if (event.target.closest(".theme-list-item-title")) {// chec if theme was chosen than close the adopt menu
    adoptMenuToggler(false); 
  } else if (isOutsideMenuClick) { // check that click happend on th bg of adopt menu
    adoptMenuToggler(false); 
  }
});