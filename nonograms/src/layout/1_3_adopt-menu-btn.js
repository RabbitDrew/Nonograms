import createElement from "../global/element-creater";
import renderElement from "../global/element-rendering";
import elemntsListObj from "../global/dom-el";

const headerBtn = function () {
    const adoptBtn = createElement('div', 'header-adopt-menu-btn')
    for (let i = 0; i < 2; i++) {
        const line = createElement('div', 'line')
        renderElement(adoptBtn, line)
    }
    renderElement(elemntsListObj.header, adoptBtn)
}

headerBtn ()
