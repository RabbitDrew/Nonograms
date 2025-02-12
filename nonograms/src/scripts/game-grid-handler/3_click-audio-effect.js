const audioClick = function (isLeftBtn, isRightBtn) {
  let clickAudioEffect;
  if (isLeftBtn && !isRightBtn) {
    clickAudioEffect = new Audio("./assets/left-btn-audio.mp3");
  } else {
    clickAudioEffect = new Audio("./assets/right-btn-audio.mp3");
  }
  clickAudioEffect.play();
  clickAudioEffect.volume = 0.5;
};

export default audioClick;
