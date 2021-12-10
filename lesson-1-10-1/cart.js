'use strict';

const cart = {
    items: [],
    count: 0,
    totalPrice:  {
    get totalPrice() {
        return console.log(this.calculateItemPrice);
    }},
    calculateItemPrice() {
        this.totalPrice = this.count * this.totalPrice
    },
    increaseCount() {
        this.count += this.count
        return console.log(this.count)
    },
    add(items, count, totalPrice, ) {
        this.items = items
        this.count = count
        this.totalPrice = totalPrice
        this.calculateItemPrice()
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
console.log(cart.add('apple', 5, 100));
console.log(cart.add('lemon', 15, 10));
cart.print();