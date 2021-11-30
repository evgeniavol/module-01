'use strict';

const getMinNumber = (num1, num2) => {
    const res = (num1 + num2 - Math.abs(num1-num2))/2;
    return console.log(`Минимальное число: ${res}`);
}
getMinNumber(75, 45);