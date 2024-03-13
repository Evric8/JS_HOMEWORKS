'use strict';

const arr = [1, 2, 3, 4, 5];

let sumAar = 0;
let sumSquare = 0;

for (let i = 1; i <= arr.length ; i++) {
  sumAar += i;
  sumSquare += Math.pow(i, 2);
}

console.log(sumAar);
console.log(sumSquare);

