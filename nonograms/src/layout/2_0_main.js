import "../style/main/main.css";
import createElement from "../global/element-creater.js";
import renderElement from "../global/element-rendering.js";
import elemntsListObj from "../global/dom-el.js";

const main = function () {
  const main = createElement("main", "page-main");
  const contentWrapper = mainContentWrapper();
  renderElement(main, contentWrapper);
  const nonogramsWrapper = contentNonogramsGridWrapper();
  renderElement(contentWrapper, nonogramsWrapper);
  const nonogramInterface = mainNonogrmasInterface();
  renderElement(contentWrapper, nonogramInterface);
  renderElement(elemntsListObj.page, main);
};

const mainContentWrapper = () => {
  const createContentWrapper = createElement(
    "div",
    "main-page-content__wrapper"
  );
  return createContentWrapper;
};

const contentNonogramsGridWrapper = () => {
  const createNongramGridWrapper = createElement(
    "div",
    "content-nongrams-grid"
  );
  return createNongramGridWrapper;
};

const mainNonogrmasInterface = () => {
  const listItem = [
    "Show solution",
    "Save the game",
    "Load the game",
    "Restart the game",
    "Finish the game"
  ];
  const gameInterface = createElement("ul", "content-game-interface");

  listItem.forEach((item) => {
    const createItem = createElement("li", "interface-btn");
    const createItemTitle = createElement("h2", "interface-btn-title");
    createItemTitle.textContent = item;
    renderElement(createItem, createItemTitle);
    renderElement(gameInterface, createItem);
  });

  return gameInterface;
};

main();
