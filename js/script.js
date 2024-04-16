'use strict';

// #1
const getFactorial = function(item){
    return item === 1 ? item : item * getFactorial(item - 1);
}

console.log(getFactorial(3));

// #2
let n = 1;
const numberUp = function(num, degree){
    if(n === num){
        return Math.pow(num, degree)
    } else {
        n++;
        return numberUp(num, degree)
    }
}

console.log(numberUp(3,2));

// #3
let arr = []
const withoutPlus = function(a,b){
    if(a !== 0){
        a--
        arr.push(1)
        return withoutPlus(a ,b)
    } else  {
        if(b !== 0){
            b--
            arr.push(1)
            return withoutPlus(a,b )
        } else {
            return arr.length
        }
    }
}

console.log(withoutPlus(3,4));







