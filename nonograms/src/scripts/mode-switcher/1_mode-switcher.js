let isDarkThemeOn = false;
let isLightThemeOn = true;

const themeToggler = (event) => {
  const parentEl = event.target;
  const chieldEl = event.target.closest(".mode-btn-title");
  if (parentEl || chieldEl) {
    if (!isDarkThemeOn && isLightThemeOn) {
      chieldEl.textContent = "Light theme";
      styleSwitcher();
      isDarkThemeOn = true;
      isLightThemeOn = false;
    } else {
      chieldEl.textContent = "Dark theme";
      styleSwitcher();
      isDarkThemeOn = false;
      isLightThemeOn = true;
    }
  }
};

const styleSwitcher = function () {
  const root = document.querySelector(":root");
  const cssVariables = [
    "--bg-color",
    "--font-color",
    "--grid-bg-color",
    "--border-color",
    "--hover-color",
    "--dropdown-bg-color",
    "--svg-color",
  ];

  const darkColorsList = [
    "#3a3a3a",
    "#dcdcdc",
    "#515151b6",
    "#b3b3b3",
    "#aaaaaa",
    "#444444",
    "#dcdcdc",
  ];

  const ligthColorsList = [
    "#f3ece5",
    "#413527",
    "#ffffff95",
    "#413527",
    "#6f6f6f",
    "#ffffffa9",
    "#413527",
  ];

  cssVariables.forEach((variable, i) => {
    if (!isDarkThemeOn) {
      root.style.setProperty(variable, darkColorsList[i]);
    } else {
      root.style.setProperty(variable, ligthColorsList[i]);
    }
  });
};

export default themeToggler;
