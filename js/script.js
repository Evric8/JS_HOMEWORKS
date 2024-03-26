'use strict';

// 1
const arr = ['a', 'b', 'c', 'd'];
let a=[]
for(let i = 1; i <= arr.length; i++){
  if (i % 2 !== 0){
    a.push(`${arr[i-1]}+${arr[i]}`)
  }
}
alert(a.join(','))

// 2
const arr2 = [2, 5, 3, 9];
let result = arr2[0] * arr2[1] + arr2[2] * arr2[3];
alert(result)

// 3
const arr3 = [[1,2,3], [4,5,6], [7,8,9]];
const arr3New = arr3.flat().find((item)=>{
  return item === 4
})
alert(arr3New)

// 4
const obj = {
  js:['jQuery', 'Angular'],
  php: 'hello',
  css: 'world',
}
console.log(obj.js[0])

// 5
const arr5 = [];
for (let i = 1; i <= 5; i++) {
  arr5.length > 0 ? arr5.push('x'.repeat(i)) : arr5.push('x')
}
console.log(arr5)

// 6
const arr6 = [];
for(let i= 1; i <= 5; i++){
 i > 1 ? arr6.push(String(i).repeat(i)) : arr6.push(String(i))
}
console.log(arr6)

// 7
const arrayFill = function (a, b) {
return  a.repeat(b).split('')
}
console.log(arrayFill('x', 5))

// 8
const sum = function (arr){
  let elementsLength = 1
  let a = arr[0];
for(let i = 1; i <= arr.length; i++) {
  if(a <= 10) {
    elementsLength += 1
    a += arr[i]
  }
}
return elementsLength
}
console.log(sum([1,2,3,4,5,6]))

// 9
const revers = function (arr) {
  for(let i = 0; i <= arr.length; i++) {
    const current = arr[i];
    const lastElem = arr[arr.length - (1 + i)];
    arr[i] = lastElem;
    arr[arr.length - (1 + i)] = current;
    if(i + 1 === Math.floor(arr.length  / 2))break
  }
  return arr
}
console.log(revers([1, 2, 3, 4, 5]))

// 10
const arr10 = [[1, 2, 3], [4, 5], [6]];
const arr10Sum = arr10.flat().reduce((acc, item)=>{
  return acc += item
})
console.log(arr10Sum)

// 11
const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const arr11Sum = arr11.flat(2).reduce((acc, item)=>{
  return acc += item
})
console.log(arr11Sum)
