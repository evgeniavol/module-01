'use strict';

// #1
const reverseString = str => {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return console.log(newString);;
}
reverseString('Цикл');

// #2

const reverseStrings = str => {
    const res = str.split('').reverse().join('');
    return console.log(res);
}
reverseString('Цикл');