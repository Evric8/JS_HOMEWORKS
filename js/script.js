'use strict';

const arr =  [1, 2, 3, 4, 5];

// 1 indexOf()
 const functionIndexOf = function(arr, item, index = 0) {
     const currentItem = index < 0 ? arr.length  + index : index;

     if (index >= arr.length) return -1;

     for (let i = currentItem; i < arr.length; i++){
        if(item === arr[i]) return i;
     }

     return -1
 }

console.log(functionIndexOf(arr, 3, -3));


// 2 lastIndexOf()
const str = 'Дивний новий мир';
const functionLastIndexOf = function(str, item, index = str.length) {
    let currentIndex = index < 0 ? 0 : index - 1;

    for (let i = currentIndex ; i >= 0; i--){
        if(item[0] === str[i]) return i;
    }

    return -1
}

console.log(functionLastIndexOf(str, 'й'));


// 3 find()
const functionFind = function(arr, callback){
    for (let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)) return arr[i];
    }

    return undefined;
}

console.log(functionFind(arr, (item) => item === 2));


// 4 findIndex()
const functionFindIndex = function(arr, callback){
    for (let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)) return i;
    }

    return -1;
}

console.log(functionFindIndex(arr,(item) => item === 2))


// 5 includes()
const functionIncludes = function(arr, element, index = 0){
    const searchElement = index < 0 ? arr.length + index : index;

    if(searchElement >= arr.length) return false

    for(let i = searchElement; i < arr.length; i++){
        if(element === arr[i]) return true;
    }

    return false;
}

console.log(functionIncludes(arr, 2, 5));


// 6 every()
const functionEvery = function(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(!callback(arr[i], i, arr))return false
    }

    return true
}

console.log(functionEvery(arr, (elem) => elem < 6));


// 7 some()
const functionSome = function(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)) return true
    }

    return false
}

console.log(functionSome(arr, (item) => item === 3));


// 8 reduce()
const functionReduce = function(arr, callback, acc) {
    let result = acc

    for(let i = 0; i < arr.length; i++){
        result += callback(acc, arr[i], i, arr);
    }

    return result
}

console.log(functionReduce(arr, (accum, item) => {
   return accum + item
},0));