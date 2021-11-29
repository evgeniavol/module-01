'use strict';

 const isPrime = (numbers) => {
  let num = numbers;
  
  let checkBool = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      checkBool = false;
    }
  }
  return console.log(checkBool);
}
isPrime(6);