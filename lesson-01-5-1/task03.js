'use strict';

const converterString = str => {
    let oldStr = str;
    let reverseStr = oldStr.split('').reverse().join('');
    return console.log(reverseStr);
}
converterString('Привет мир');