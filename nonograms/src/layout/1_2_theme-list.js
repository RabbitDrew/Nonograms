import createElement from "../global/element-creater.js";
import renderElement from "../global/element-rendering.js";

const themeList = (themes) => {
  const themeList = createElement("ul", "nav-item-theme-list");
  const itemList = themes.map(el => el.gameTheme) 
  // get themes from the object to render in the drop down list
  itemList.forEach((item) => {
    const createItem = createElement("li", "theme-list-item");
    const createItemTitle = createElement("h2", "theme-list-item-title");
    createItemTitle.textContent = item;
    renderElement(createItem, createItemTitle)
    renderElement(themeList, createItem)
  });
  //add random gaame to the main list of themes
  const randomThemeItem = createElement("li", "theme-list-item-random");
  const randomThemeItemTitle = createElement("h2", "theme-list-item-title-random");
  randomThemeItemTitle.textContent = 'random theme'
  renderElement(randomThemeItem, randomThemeItemTitle)
  renderElement (themeList, randomThemeItem)
  return themeList;
};

export default themeList