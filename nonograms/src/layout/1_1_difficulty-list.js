import createElement from "../global/element-creater.js";
import renderElement from "../global/element-rendering.js";

const difficultyList = () => {
  const difficultyList = createElement("ul", "nav-item-difficulty-list");
  const itemList = ["easy", "medium", "hard"];
  itemList.forEach((item) => {
    const createItem = createElement("li", "difficulty-list-item");
    const createItemTitle = createElement("h2", "difficulty-list-item-title");
    createItemTitle.textContent = item;
    renderElement(createItem, createItemTitle)
    renderElement(difficultyList, createItem)
  });

  return difficultyList;
};

export default difficultyList