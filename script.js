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
const [playerPickBox, housePickBox] = document.querySelectorAll(
  '.game-icon-box-picked'
);
const [placeholderPlayer, placeholderHouse] =
  document.querySelectorAll('.placeholder');
const pickedPlayerImg = document.querySelector('.game-icon-picked_player');
const pickedHouseImg = document.querySelector('.game-icon-picked_house');

const imgArr = document.querySelectorAll('.game-icon');
const gameMovesArr = [];
const GetGameMoveNames = function () {
  imgArr.forEach(item => {
    gameMovesArr.push(item.getAttribute('src').slice(12, -4));
  });
};
GetGameMoveNames();

const ChangeBoard = function () {
  gameBoard.classList.add('hidden');
  youPickedBoard.classList.remove('hidden');
};

// make random number result and its img popup delayed
// idea: multply random num by img arr length

const GenerateRandomNum = function () {
  return Math.floor(Math.random() * 3);
};

const ShowPickedPlayerIcon = function (iconName) {
  placeholderPlayer.classList.remove('hidden');
  placeholderHouse.classList.remove('hidden');
  playerPickBox.classList.add(`icon-${iconName}-picked`);
  pickedPlayerImg.src = `images/icon-${iconName}.svg`;
};
const ShowPickedHouseIcon = function () {
  const randomIndex = GenerateRandomNum();
  housePickBox.classList.remove('hidden');
  housePickBox.classList.add(`icon-${gameMovesArr[randomIndex]}-picked`);
  pickedHouseImg.src = `images/icon-${gameMovesArr[randomIndex]}.svg`;
};
const CheckWinner = function () {
  if (
    playerPickBox.classList.contains('icon-paper-picked') &&
    housePickBox.classList.contains('icon-rock-picked')
  ) {
  }
};

gameBoard.addEventListener('click', e => {
  const clicked = e.target.closest('.game-icon-box');
  const getAttribute = clicked?.getAttribute('id');
  if (clicked) {
    ChangeBoard();
    setTimeout(ShowPickedHouseIcon, 500);
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
