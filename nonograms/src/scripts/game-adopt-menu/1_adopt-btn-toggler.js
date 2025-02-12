//adopt menu toggler 
import renderElement from "../../global/element-rendering";
import adoptMenu from "../../layout/1_4_adopt-menu";
import elemntsListObj from "../../global/dom-el";
const adoptMenuToggler = function (open) {
  if (open) {
    const menu = adoptMenu();
    renderElement(elemntsListObj.page, menu);
  } else {
    if (elemntsListObj.adoptMenu){
      elemntsListObj.adoptMenu.classList.add("adopt-menu--close");
      setTimeout(() => {
        elemntsListObj.adoptMenu.remove();
      }, 500);
    }else {
      return
    }
  }
};

export default adoptMenuToggler;
