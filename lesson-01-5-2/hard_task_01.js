'use strict';

const getNod = (a, b) => {
  let c = 0;
  while (a !== 0) {
    c = b % a;
    b = a;
    a = c;
  }
  return console.log(`Наибольший общий делитель: ${b}`);
}
getNod(45, 150);