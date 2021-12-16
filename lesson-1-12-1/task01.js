"use strict";

let hiddenNum = parseInt(Math.random() * 100);

function guessNumber(num) {
  let userNumber = parseInt(prompt('Угадай число'));

  if (userNumber > num) {
    alert('Меньше!');
  } else if (userNumber < num) {
    alert('Больше!');
  } else if (userNumber === num) {
    alert('Правильно, Вы угадали загаданное число!');
  } else {
    return;
  }
  guessNumber(num);
}

guessNumber(hiddenNum);