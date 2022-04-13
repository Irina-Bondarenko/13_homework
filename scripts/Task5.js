"use strict";

// HOMEWORK #13

// Task#4

const arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let task4 = arr.length; ; task4--) {
    if (task4 >= 0) {
        let pow = task4 ** 2;
        sum += pow;
    } else {
        break;
    }
}

console.log(sum);