'use strict';

const olItem = document.querySelector('.items');
const liItemOne = document.querySelector('.item_one');
const liItemTwo = document.querySelector('.item_two');
const liItemThree = document.querySelector('.item_three');
const ads = document.querySelector('.ads');
const liItemThreePropsList = document.querySelector('.item_three .props__list');
const liItemFiveItemTitle = document.querySelector('.item_five .item__title');

const liItemFivePropsList = document.querySelector('.item_five .props__list');
const liItemThreeItemTitle = document.querySelector('.item_three .item__title');

const liItemTwoPropsItemFour = document.querySelector('.item_two .props__item_four:nth-child(4)');
const liItemFourPropsItemFour = document.querySelector('.item_four .props__item_four:nth-child(3)');


const liItemTwoPropsItemTwo = document.querySelector('.item_two .props__item_two:last-child');
const liItemSixPropsItemTwo = document.querySelectorAll('.item_six .props__item_two');


liItemTwoPropsItemTwo.append(liItemSixPropsItemTwo[0]);
liItemTwoPropsItemTwo.append(liItemSixPropsItemTwo[1]);


olItem.prepend(liItemOne);

liItemOne.after(liItemTwo);
liItemTwo.after(liItemThree);


liItemFiveItemTitle.after(liItemThreePropsList);
liItemThreeItemTitle.after(liItemFivePropsList);
liItemFourPropsItemFour.after(liItemTwoPropsItemFour);
ads.remove();

