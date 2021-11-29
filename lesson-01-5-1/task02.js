'use strict';

const modifiedString = str => {
    let strForModification = str;
    let strLowerCase = strForModification.toLowerCase();
    let newString = strLowerCase[0].toUpperCase() + strLowerCase.slice(1);
    return console.log(newString);
}
modifiedString('привет Мир');
