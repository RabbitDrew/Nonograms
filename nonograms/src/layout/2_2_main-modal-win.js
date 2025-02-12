import '../style/modal-win/modal-win.scss'
import createElement from "../global/element-creater";
import renderElement from "../global/element-rendering";
import elemntsListObj from "../global/dom-el";

const pageModalWin = function (result, time) {
  const pageModalWin = createElement("section", "page-modal");
  const modalWin = createModalWin(result, time) 
  renderElement(pageModalWin, modalWin)
  renderElement(elemntsListObj.page, pageModalWin)
  return pageModalWin
};

const createModalWin = (result, time) => {
  const modalWin = createElement("div", "modal-win");
  const winTitle = createElement("h2", "win-title");
  winTitle.textContent = result;
  renderElement(modalWin, winTitle);
  const winTime = createElement("h2", "win-time");
  winTime.textContent = time;
  renderElement(modalWin, winTime);
  const restartBtn = createElement("div", "modal-restart-game-btn");
  const btnTitle = createElement("h2", "game-btn-title");
  btnTitle.textContent = "Restart the game";
  renderElement(restartBtn, btnTitle);
  renderElement(modalWin, restartBtn);
  return modalWin;
};

export default pageModalWin;
