// storage for dom element to use theme further 
const elemntsListObj = {
  get page() {
    return document.querySelector(".page");
  },
  get header () {
    return document.querySelector(".page-header");
  },
  get navItems() {
    return document.querySelectorAll(".nav-item");
  },
  get styleLine() {
    return document.querySelectorAll(".style-line");
  },
  get gridWrapper() {
    return document.querySelector(".content-nongrams-grid");
  },
  get modeBtn() {
    return document.querySelector(".header-mode-btn");
  },
  get cells() {
    return document.querySelectorAll(".grid-cell");
  },
  get gameBtns() {
    return document.querySelectorAll(".interface-btn");
  },
  get timer() {
    return document.querySelectorAll(".timer-title");
  },
  get adoptBtn ()  {
    return document.querySelector(".header-adopt-menu-btn");
  },
  get adoptMenu () {
    return document.querySelector(".header-adopt-menu");
  }
};

export default elemntsListObj;
