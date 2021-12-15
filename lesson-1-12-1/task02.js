'use strict';


const arr = []

const recurFun = (arr) => {
  arr.push(Math.round(Math.random() * 10));

  let sumItem = arr.reduce((sum, current) => {
    return sum + current;
  })

  if (sumItem > 50) {
    return arr;
  }
  return recurFun(arr);
}
console.log(recurFun([10]));