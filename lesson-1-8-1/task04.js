'use strict';

const getRandomArrayElement = (n, m) => {
    let years = [];
    let result = [];
    const num1 = n;
    const num2 = m;
    let max;
    let min;
    if (num1 > num2) {
        max = num1;
        min = num2;
    } else {
        max = num2;
        min = num1;
    }

    for (let i = min; i <= max; i++) {
        years.push(i);
    }
     result= years.filter(year => year % 400 === 0 || year % 100 !== 0 && year % 4 === 0);
     return console.log(result);
}
getRandomArrayElement(1990, 2021);

