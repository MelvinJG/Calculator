"use strict";
class calculator {
    /*number1: number;
    number2: number;
    constructor(number1: number, number2: number){
        this.number1 = number1;
        this.number2 = number2;
    }*/
    add(number1, number2) {
        return number1 + number2;
    }
    sub(number1, number2) {
        return number1 - number2;
    }
    mul(number1, number2) {
        return number1 * number2;
    }
    div(number1, number2) {
        return number1 / number2;
    }
}
var suma1 = new calculator();
console.log(suma1.add(3, 4));
console.log(suma1.sub(3, 4));
console.log(suma1.mul(3, 4));
console.log(suma1.div(3, 4));
