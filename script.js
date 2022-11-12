'use strict';

/* GAME RULES */
const gameRulesModal = document.querySelector('.game-rules_wrapper');
const btnRules = document.querySelector('.btn-rules');
const iconClose = document.querySelector('.icon-close');
const overlay = document.querySelector('.overlay');

const OpenRulesModal = function () {
  gameRulesModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const CloseRulesModal = function () {
  gameRulesModal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const CloseRulesModalEscapeKey = function (e) {
  if (e.key === 'Escape' && !gameRulesModal.classList.contains('hidden')) {
    CloseRulesModal();
  }
};

btnRules.addEventListener('click', OpenRulesModal);
iconClose.addEventListener('click', CloseRulesModal);
overlay.addEventListener('click', CloseRulesModal);
window.addEventListener('keydown', CloseRulesModalEscapeKey);

/* Gameplay? */
const gameBoard = document.querySelector('.game-icons_wrapper');
const youPickedBoard = document.querySelector('.game-icons_wrapper-picked');
const pickedPlayerImgDiv = document.querySelector('.game-icon-box-picked');
const pickedPlayerImg = document.querySelector('.game-icon-picked_player');
const placeholderDivs = document.querySelectorAll('.placeholder');

const ChangeBoard = function () {
  gameBoard.classList.add('hidden');
  youPickedBoard.classList.remove('hidden');
};
const ShowPickedPlayerIcon = function (iconName) {
  pickedPlayerImgDiv.classList.remove('hidden');
  pickedPlayerImgDiv.classList.add(`icon-${iconName}-picked`);
  pickedPlayerImg.src = `images/icon-${iconName}.svg`;
};

// get array of icons, generate random number, use it in index
const imgArr = document.querySelectorAll('.game-icon');
const GenerateRandomNum = function () {
  return Math.floor(Math.random() * 3);
};

gameBoard.addEventListener('click', e => {
  const clicked = e.target.closest('.game-icon-box');
  const getAttribute = clicked?.getAttribute('id');
  if (clicked) {
    ChangeBoard();
    GenerateRandomNum();
  }

  switch (getAttribute) {
    case 'pick-paper':
      ShowPickedPlayerIcon('paper');
      break;
    case 'pick-scissors':
      ShowPickedPlayerIcon('scissors');
      break;
    case 'pick-rock':
      ShowPickedPlayerIcon('rock');
      break;
    default:
      break;
  }

  if (!clicked) return;
});
