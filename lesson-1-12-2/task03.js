'use strict';

const rectangle = {
    width: 5,
    height: 5,
    get perimeter() {
        return `"${(this.width + this.height) * 2} см"`;
    },
    get square() {
        return `"${this.width * this.height} см"`;
    },
    set newWidth(width) {
        return this.width = parseInt(this.width + width);
    },
    set newHeight(heigth) {
        this.heigth = parseInt(this.heigth + heigth);
    },
}

