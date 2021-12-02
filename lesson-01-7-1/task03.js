'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const addPrefix = (arr, arg) => {
    let newArr = [];
    let addPref = arg.slice(0, 2);
    for (let i = 0; i < arr.length; i++) {
        newArr.push(`${addPref} ${arr[i]}`);
    }
    return console.log(newArr);
};

addPrefix(names, 'Mr.');