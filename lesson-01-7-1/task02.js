'use strict';

const allСashbox = (arr) => {

    let sum = 0;
    let countDays;
    let result;
    for (let i = 0; i < arr.length; i++) {
        countDays = arr.length;
        sum += arr[i];
        result = Math.floor(sum / countDays);
    }
    return console.log(result);
}
allСashbox([4500, 3210, 650, 1250, 7830, 990, 13900, 370]);