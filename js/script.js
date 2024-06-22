'use strict';

function cacheFunc(func){
    let currentId = 1
    const cache = new Map();

    return function(fn){
        if(cache[fn] !== undefined){
            return cache[fn]
        } else {
            let result = func(fn)
            cache[fn] = result
            cache.set(currentId, cache[fn])
            currentId += 1

            if(cache.size > 10) {
                cache.delete(currentId - 11);
            }

            return result
        }
    }
}

function sum(a){
    return a + 10
}

const b = cacheFunc(sum)

console.log(b(1));
console.log(b(2));
console.log(b(3));
console.log(b(4));
console.log(b(5));
console.log(b(6));
console.log(b(7));
console.log(b(8));
console.log(b(9));
console.log(b(10));
console.log(b(11));
console.log(b(12));
console.log(b(13));
console.log(b(14));
