import "../style/header/header.css";
import createElement from "../global/element-creater.js";
import renderElement from "../global/element-rendering.js";

import elemntsListObj from "../global/dom-el.js";

const createHeader = function () {
  const header = createElement("header", "page-header");
  const logo = headerLogo();
  renderElement(header, logo);
  const nav = headerNav();
  renderElement(header, nav);
  const timer = headerTimer();
  renderElement(header, timer);
  const modeBtn = headerModeBtn();
  renderElement(header, modeBtn);
  renderElement(elemntsListObj.page, header);
};
// logo block
const headerLogo = () => {
  const createLogo = createElement("div", "header-logo");
  const createLogoTitle = createElement("h1", "logo-title");
  createLogoTitle.textContent = "Nonograms";
  renderElement(createLogo, createLogoTitle);
  return createLogo;
};
//navigation block 
const headerNav = () => {
  const itemList = ["Difficulty level", "Game theme", "Result table"];
  const createHeaderNav = createElement("ul", "header-nav");
  itemList.forEach((navTitle, i) => {
    const createNavItem = createElement("li", "nav-item");
    const createItemTitle = createElement("h2", "nav-item-title");
    createItemTitle.textContent = navTitle;
    renderElement(createNavItem, createItemTitle);
    if (i <= 1) {
      const createStileLine = createElement("div", "style-line");
      renderElement(createNavItem, createStileLine);
    }
    renderElement(createHeaderNav, createNavItem);
  });
  return createHeaderNav;
};
//timer block 
const headerTimer = () => {
  const itemList = ["00", ":", "00"];
  const createTimer = createElement("div", "header-timer");
  itemList.forEach((item) => {
    const createItem = createElement("h2", "timer-title");
    createItem.textContent = item;
    renderElement(createTimer, createItem);
  });
  return createTimer;
};
//mode switcher btn
const headerModeBtn = () => {
  const createModeBtn = createElement("div", "header-mode-btn");
  const createModeBtnTitle = createElement("h2", "mode-btn-title");
  createModeBtnTitle.textContent = "Dark mode";
  renderElement(createModeBtn, createModeBtnTitle);
  return createModeBtn;
};

createHeader();
