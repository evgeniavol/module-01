'use strict';

const getRandomArrayElement = (num, n, m) => {
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
    res = Array.from({length: num}, () => Math.round(Math.random() * Math.abs(max - min) + min));

    return console.log(res);
}

getRandomArrayElement(5, 10, 5);