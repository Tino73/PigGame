'use strict';

//Selecting Elements
const player0EL = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling Dice Functionality
btnRoll.addEventListener('click', () => {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(
      `#current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    currentScore = 0;

    document.querySelector(
      `#current--${activePlayer}`
    ).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');

    player1El.classList.toggle('player--active');
  }
});
