'use strict';

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },

  calculateItemPrice() {
    let calculateItemsPrice = 0;
    this.items.forEach(item => {
      calculateItemsPrice += item.count * item.totalPrice;
    });
    return calculateItemsPrice;
  },

  increaseCount(count) {
    this.count += count;
    return this.count + count;
  },

  add(items, count, totalPrice) {
    this.increaseCount(count);

    const obj = {
      itemName: items,
      count,
      totalPrice,
    };

    this.items.push(obj);
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(cart));
  },
};

cart.add('lemon', 5, 10);
cart.add('pineapple', 3, 10);
cart.add('peach', 10, 10);

cart.print();
