'use strict';

const getRandomArrayElement = (numbers, n, m) => {
    let arr = [];
    const num1 = n;
    const num2 = m;
    let max;
    let min;
    let num = numbers;

    if (num1 > num2) {
        max = num1;
        min = num2;
    } else if (num1 === num2) {
        console.log('Введите разные значения');
    } else {
        max = num2;
        min = num1;
    }

    for (let i = 0; i < num; i++) {

        for (let k = min; k <= max; k++) {
            arr.push(k);
        }
        return console.log(arr);
    }
}

getRandomArrayElement(3, 5, 25);
