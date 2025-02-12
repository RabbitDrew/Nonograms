import createElement from "../global/element-creater";
import renderElement from "../global/element-rendering";
import configGame from "../global/config-game-data";


const itemTitleList = [
    'Difficulty',
    'Game theme',
    'Result table'
]
const itemTitleListDiff = [
    'easy',
    'medium',
    'hard'
]

const adoptMenu = () => {
    const headerAdoptMenu = createElement('div', 'header-adopt-menu')
    const adoptMenu = adoptMenuWrapper()
    renderElement(headerAdoptMenu, adoptMenu)
    return headerAdoptMenu
}

const adoptMenuWrapper = () => {
    const adoptMenuWrapper = createElement('ul', 'adopt-menu')
    itemTitleList.forEach((title, i) => {
        const item = createElement('li', 'adopt-menu-item')
        const itemTitle = createElement('h2', 'adopt-menu-item-title')
        itemTitle.textContent = title
        renderElement(item, itemTitle)
        const styleLine = createElement('div', 'style-line')
        renderElement(item, styleLine)
        if (i === 0) {
            const subMenuDiff = subMenu(itemTitleListDiff, 'difficulty-list-item','difficulty-list-item-title')
            renderElement(item, subMenuDiff)
        } else if (i === 1) {
            const createTitleArr = configGame.levelArr.map(el => el.gameTheme)
            const subMenuTheme = subMenu(createTitleArr, 'theme-list-item' ,'theme-list-item-title')
            renderElement(item, subMenuTheme)
        }
        renderElement(adoptMenuWrapper, item)
    })
    return adoptMenuWrapper
}

const subMenu = (itemTitleArr, classNameItme, classNamTitle) => {
    const subMenu = createElement('ul', 'sub-list')
    itemTitleArr.forEach(title => {
        const item = createElement('li', classNameItme)
        const itemTitle = createElement('h2', classNamTitle)
        itemTitle.textContent = title
        renderElement(item, itemTitle)
        renderElement(subMenu, item)
    })
    return subMenu
}


//sub function for rerendering list of themes 
const renderListTheme = function () {
    
}

export default adoptMenu