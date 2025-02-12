import getResultData from "./2_get-local-storage-data";
import pageModalWinTable from "../../layout/2_3_modal-win-table";
import elemntsListObj from "../../global/dom-el";
import renderElement from "../../global/element-rendering";

const showResultTable = function () {
    const resultArrData = getResultData()
    console.log(resultArrData)
    const getModalTable = document.querySelector('.page-modal')
    if (!getModalTable) {
        const modalWin = pageModalWinTable(resultArrData)
        renderElement(elemntsListObj.page, modalWin)
    }else {
        getModalTable.classList.add('modal--close')
        setTimeout(() => {
            getModalTable.remove()
        }, 490)
    }
}

export default showResultTable