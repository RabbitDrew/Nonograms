import createElement from "../global/element-creater";
import renderElement from "../global/element-rendering";
import elemntsListObj from "../global/dom-el";
const pageModalWinTable = function (resultItems) {
    const pageModalWin = createElement("section", "page-modal");
    const modalWin = createModalWin(resultItems);
    renderElement(pageModalWin, modalWin);
    renderElement(elemntsListObj.page, pageModalWin);
    return pageModalWin;
};

const createModalWin = (resultItems) => {
    const modalWin = createElement("div", "modal-win");
    //header
    const modalWinTableHeader = createElement("div", "modal-win-table-header");
    const headerTitleLevel = createElement("h2", "table-header-title");
    headerTitleLevel.textContent = "Level";
    renderElement(modalWinTableHeader, headerTitleLevel);
    const headerTitleTheme = createElement("h2", "table-header-title");
    headerTitleTheme.textContent = "Theme";
    renderElement(modalWinTableHeader, headerTitleTheme);
    const headerTitleTime = createElement("h2", "table-header-title");
    headerTitleTime.textContent = "Time";
    renderElement(modalWinTableHeader, headerTitleTime);
    renderElement(modalWin, modalWinTableHeader);
    //list result
    const resultList = createElement("ul", "modal-win-rsult-list");
    resultItems.forEach(objStat => {
        const listItem = createElement("li", "modal-win-table-item");
        const itemTitleLevel = createElement("h2", "table-item-title");
        itemTitleLevel.textContent = objStat.level;
        renderElement(listItem, itemTitleLevel);
        const itemTitleTheme = createElement("h2", "table-item-title");
        itemTitleTheme.textContent = objStat.theme;
        renderElement(listItem, itemTitleTheme);
        const itemTitleTime = createElement("h2", "table-item-title");
        itemTitleTime.textContent = objStat.time;
        renderElement(listItem, itemTitleTime);
        renderElement(resultList, listItem);
    });
    renderElement(modalWin, resultList);
    return modalWin;
};

export default pageModalWinTable;