
const sizeFieldSwitcher = function (event) {
  const getLevel = document.querySelectorAll(".difficulty-list-item-title");
  if (getLevel && getLevel.length !== 0) {
    const levelArrIndex =
      Array.from(getLevel).findIndex(
        (el) => el.textContent.trim() === event.target.textContent.trim()
      ) + 1;
     return 5 * levelArrIndex;
  } else {
    return;
  }
};

export default sizeFieldSwitcher;
