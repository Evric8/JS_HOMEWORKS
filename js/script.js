
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

function myBind2 (fn, context, ...args){

    return function(...argsFuncStart){
        const key = Date.now().toString()
        context[key] = fn
        const result = context[key](...args.concat(argsFuncStart))
        delete context[key]
        return result
    }
}

console.log(myBind2(obj.funcStart, obj2)())

