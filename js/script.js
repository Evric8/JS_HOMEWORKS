'use strict';

function funClose(sum){
    return function (b) {
        sum += b
        return `sum(${b}) = ${sum}`
    }
}

const sum = funClose(0)

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));




