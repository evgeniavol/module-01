'use strict';

const getNod=(num1, num2) =>  {
  if (num2 > 0) {
    let nod = num1 % num2;
    return console.log(`Наибольший общий делитель : ${nod}`);
  }
 }
getNod(45, 150);

