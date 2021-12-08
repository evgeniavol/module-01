'use strict';


const getRandomArrayElement = (numbers) => {
    let num = numbers;
    let newArr = [];

    for (let i = 0; i < num; i++) {
        newArr.push(Math.round(Math.random() * 101));
    }
    return console.log(newArr);

}

getRandomArrayElement(5);