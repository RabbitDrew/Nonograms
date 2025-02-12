import elemntsListObj from "../../global/dom-el";
import getResultData from "./2_get-local-storage-data";
import showResultTable from "./3_show-result-table";
elemntsListObj.navItems[elemntsListObj.navItems.length-1].addEventListener('click', (event) => {
getResultData()
showResultTable()
})

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('page-modal')) {
        showResultTable()
    }
})