'use strict';

const getMinNumber = (num1, num2) => {
    const number01 = num1;
    const number02 = num2;
    const res = (number01 < number02) ? number01 : number02;
    return console.log(`Минимальное число равно ${res}`);
}
getMinNumber(15, 45);