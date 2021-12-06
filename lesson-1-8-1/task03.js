'use strict';

const getRandomArrayElement = (num, n, m, arg) => {
    const args = arg;
    const arr = Array(num);
    const num1 = n;
    const num2 = m;
    let max;
    let min;
    let res;

    if (num1 > num2) {
        max = num1;
        min = num2;
    } else {
        max = num2;
        min = num1;
    }
    let newArr = Array.from({length: num}, () => Math.round(Math.random() * Math.abs(max - min) + min));
    if (args === 'even') return console.log(newArr.filter((item) => item % 2 === 0));
    else return console.log(newArr.filter((item) => item % 2 != 0));
}

getRandomArrayElement(5, 55, 25, 'even');



