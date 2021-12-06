'use strict';

const getRandomArrayElement=(num) => {
    const res = Array.from({length: num}, () => Math.round(Math.random() * 101))
    return console.log(res);
 }

getRandomArrayElement(5);