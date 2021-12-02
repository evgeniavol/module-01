'use strict';

const allСashbox = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370]
];

const getAverageBill = (arr) => {
    let newItemPrice;
    let newArrSum = [];
    let totalValue = 0;

    let newItemCount;
    let newArrCount = [];
    let countGoods;
    let result;

    for (let item of arr) {
        newItemCount = item.slice(0, 1).join(', ');
        newArrCount.push(newItemCount);
        countGoods = newArrCount.length;

        newItemPrice = item.slice(1).join(' ');
        newArrSum.push(newItemPrice);
    }
    for (let elem of newArrSum) {
        elem = parseInt(elem);
        totalValue += elem;
    }
    result = Math.floor(totalValue / countGoods);
    return console.log(result);
}
getAverageBill(allСashbox);