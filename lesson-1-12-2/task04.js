"use strict";

const cart = {
    items: [],
    count: 0,
    discount: 0,
    set setDiscount(promocode) {
        if (promocode === "METHED") return this.discount = 15;
        else if (promocode === "NEWYEAR") return this.discount = 21;
    },
    get totalPrice() {
        return this.calculateItemPrice();
    },

    calculateItemPrice() {
        let calculateItemsPrice = 0;
        let disc = this.discount/100;

        this.items.forEach(item => {
            calculateItemsPrice += item.count * item.totalPrice;
            let res = calculateItemsPrice * disc;
            calculateItemsPrice -= res;
        })
        return calculateItemsPrice;
    },

    increaseCount(count) {
        this.count += count
        return this.count + count;
    },

    add(items, count, totalPrice) {
        this.increaseCount(count);

        let obj = {
            itemName: items,
            count: count,
            totalPrice: totalPrice
        }

        this.items.push(obj);
    },

    clear() {
        this.items = []
        this.totalPrice = 0
        this.count = 0
    },
    print() {
        console.log(JSON.stringify(cart));
    }
}

cart.add('lemon', 12, 10);
cart.setDiscount = "METHED";

cart.print();