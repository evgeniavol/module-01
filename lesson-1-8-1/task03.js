'use strict';

const getRandomArrayElement = (num, n, m, arg) => {
    const args = arg;
    let newArr = [];
    const num1 = n;
    const num2 = m;
    let max;
    let min;
    let res;
    for (let i = 0; i < num; i++) {

        if (num1 > num2) {
            max = num1;
            min = num2;
        } else if (num1 === num2) {
            console.log('Введите разные значения');
        }  else {
            max = num2;
            min = num1;
        }
        for (let k = min; k <= max; k++) {
            newArr.push(k);
        }
        if (args === 'even') return console.log(newArr.filter((item) => item % 2 === 0));
        else return console.log(newArr.filter((item) => item % 2 != 0));
    }
}

getRandomArrayElement(5, 55, 25, 'even');


