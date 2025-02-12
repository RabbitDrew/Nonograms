import elemntsListObj from "../../global/dom-el";
import themeToggler from "./1_mode-switcher";

elemntsListObj.modeBtn.addEventListener("click", (event) => {
  console.log(event.target.closest(".mode-btn-title"));
  themeToggler(event);
});
