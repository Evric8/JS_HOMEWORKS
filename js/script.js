'use strict';

const obj = {
    age: 42,
    aa: 1,
    funcStart( ...arg) {
        return this
    },
};

const obj2 = {
    age : 45,
    aa: 45
}

const myApply = function(func, context, arr){
    const key = Date.now().toString()
    context.key = func
    const result = context.key(arr)
    delete context.key
    return result
}
console.log(myApply(obj.funcStart, obj2,[]))

