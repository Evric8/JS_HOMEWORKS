'use strict';

const complexArray = [
    [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
    [5, [6, [7, [8, 9]]]],
    [[10, 11], 12, 13]
];

const func = function(item){
    if(arguments.length > 1)  return('Function accepts ' +
        'only 1 argument, too much arguments provided');

    const arr = []

    const a = (el)=>{
        for (let i = 0; i <= el.length; i++){
            !Array.isArray(el[i]) ? arr.push(el[i]) : a(el[i]);
        }

        return  arr.filter((element)=> {
            return element !== undefined
        })
    }

    return a(item)
}

console.log(func(complexArray));