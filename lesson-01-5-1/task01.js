'use strict';

const converterСurrency  = eurosCount => {
    let dollarsToEuro = 1.25;
    let rublesToDollar = 73;
    
    let dollarsCount = eurosCount * dollarsToEuro;
    let rublesCount = dollarsCount * rublesToDollar;
    return console.log(`${eurosCount} евро в рублях на сегодня составляет ${rublesCount} руб. `);
}
converterСurrency(200);


