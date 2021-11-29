'use strict';

const calculate = (totalSumBasket, countProduct, promoCode) => {
    let totalSumBaskets = totalSumBasket;
    let countProducts = countProduct;
    let promoCodes = promoCode;

    let discountFix = 500;
    let sumDiscountProduct;
    let promoCodeDiscountPer = 0;
    let totalValueWithDiscountFix = 0;
    let totalValueWithDiscount;
    let totalValue;

    let totalExceedsDiscount;

    if (countProducts !== "" && countProducts > 0 && countProducts > 10) {
        sumDiscountProduct = totalSumBaskets * 0.03;
        totalValueWithDiscount = totalSumBasket - sumDiscountProduct;
        if (totalSumBaskets !== "" && totalSumBaskets > 0 && totalSumBasket > 30000) {
            totalExceedsDiscount = (totalSumBasket - 30000) * 0.15;
            totalValueWithDiscount = totalSumBasket - totalExceedsDiscount;
        } else {
            console.log('Что-то пошло не так');
        }
        if (typeof promoCodes === 'string' && promoCodes === 'METHED') {
            promoCodeDiscountPer = totalSumBasket * 0.10;
        } else if (typeof promoCodes === 'string' && promoCodes === 'G3H2Z1' && totalValueWithDiscount > 2000) {
            totalValueWithDiscountFix = totalSumBasket - discountFix;
        } else {
            console.log('Что-то пошло не так с промокодом');
        }
        totalValue = totalSumBaskets - sumDiscountProduct - totalExceedsDiscount - promoCodeDiscountPer - discountFix;
    } else {
        console.log('Что-то пошло не так');
    }
    return console.log(`Общая сумма корзины c учетом всех скидок: ${totalValue} руб.`);
}

calculate(50000, 15, 'METHED');