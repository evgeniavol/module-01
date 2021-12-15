"use strict";

let hiddenNum = parseInt(Math.random() * 100);

function guessNumber() {
  let userNumber = prompt('Угадай число');

  if (userNumber > hiddenNum) {
    alert('Меньше!');
  } else if (userNumber < hiddenNum) {
    alert('Больше!');
  } else if (userNumber === hiddenNum) {
    alert('Правильно, Вы угадали загаданное число!');
    return userNumber;
  } else {
    alert('Введите число');
  }
  return guessNumber();
}

console.log(guessNumber());