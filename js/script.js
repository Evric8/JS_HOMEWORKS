'use strict';

// 1
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = a.concat(b);
console.log(c)

// 2
const two = [1, 2, 3];
two.reverse();
console.log(two)

// 3
const three = [1, 2, 3];
three.push(4, 5, 6);
console.log(three)

// 4
const four = [1, 2, 3];
four.unshift(4, 5, 6);
console.log(four)

// 5
const str = ['js', 'css', 'jq' ];
alert(str.shift(0));
console.log(str)

// 6
const strTwo = ['js', 'css', 'jq'];
alert(strTwo.pop())
console.log(strTwo)

// 7
const arr = [1, 2, 3, 4, 5];
const arrNew = arr.splice(0, 3)
console.log(arrNew)

// 8
const arrTwo = [1, 2, 3, 4, 5];
const arrTwoNew = arrTwo.splice(-2);
console.log(arrTwoNew)

// 9
const arrThree = [1, 2, 3, 4, 5];
arrThree.splice(1, 2);
console.log(arrThree)

// 10
const arrFour = [1, 2, 3, 4, 5];
const arrFourNew = arrFour.splice(1, 3);
console.log(arrFourNew)

// 11
const arr11 = [1, 2, 3, 4, 5];
arr11.splice(3, 0, 'a', 'b', 'c')
console.log(arr11)

// 12
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, 'a', 'b');
arr12.splice(-1, 0, 'c');
arr12.push('e');
console.log(arr12)

// 13
const arr13 = [3, 4, 1, 2, 7];
arr13.sort(function (a, b) {return a - b})
console.log(arr13)

// 14
const arr14 = [5, 6, 7, 8, 9];
const result = arr14.reduce((sum, item) => {
  return sum + item
},0)
console.log(result)

// 15
const arr15 = [5, 6, 7, 8, 9];
const result1 = arr15.map((item)=>{
  return Math.pow(item, 2)
})
console.log(result1)

// 16
const arr16 = [1, -3, 5, 6, -7, 8, 9, -11];
const arr16New = arr16.filter((num)=> {
  return num < 0;
})
console.log(arr16New)

// 17
const arr17 = [1, -3, 5, 6, -7, 8, 9, -11];
const arr17New = arr17.filter((num) => {
  return num % 2 === 0;
})
console.log(arr17New)

//18
const str18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const str18New = str18.filter((s) => {
  return s.length > 5;
})
console.log(str18New)

// 19
const arr19 = [11, 2, [3, 4], 5, [6, 7]];
const arr19New = arr19.filter((a) => {
  return a.length >= 2;
})
console.log(arr19New)

// 20
const arr20 = [5, -3, 6, -5, 0, -7, 8, 9];
const arr20New = arr20.reduce((acc, num)=>{
  num < 0 ? acc += 1 : acc += 0;
  return acc
},0)
console.log(arr20New)