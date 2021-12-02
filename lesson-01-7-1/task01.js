'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов', ];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr1, arr2) => {

    let arr01 = arr1;
    let arr02 = arr2;
    let newArr = [];
    for (let item of arr01) {
        if (arr02.includes(item) === false) {
            newArr.push(item)
        }
    }
    return console.log(newArr);
}
filter(allStudents, failedStudents);