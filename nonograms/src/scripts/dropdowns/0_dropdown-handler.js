// handlers for header navigation items  
import elemntsListObj from "../../global/dom-el";
import { dropdownOpen, dropdownClose } from "./1_open-dropdown";
elemntsListObj.navItems.forEach((item, i) => {
//difficulty level
  if (i === 0) {
    item.addEventListener("mouseenter", (event) => {
      dropdownOpen(event, true, false);
    });

    item.addEventListener("mouseleave", (event) => {
      dropdownClose(event, true, false);
    });
  }
//game theme
  if (i === 1) {
    item.addEventListener("mouseenter", (event) => {
      dropdownOpen(event, false, true);
    });

    item.addEventListener("mouseleave", (event) => {
      dropdownClose(event, false, true);
    });
  }
});
