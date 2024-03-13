'use strict';

//1
let str = '';
for (let i = 10; i <= 20; i++) {
  i !== 20 ? str += `${i}, ` : str += i;
}
alert(str);

//2
for (let i = 10; i <= 20; i++) {
  console.log(Math.pow(i, 2));
}

//3
for (let i = 1; i <= 7; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i * j);
  }
}

//4
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(sum);

//5
let multiply =  1;
for (let i = 15; i <= 35; i++) {
  multiply *= i;
}
console.log(multiply);

//6
let middle = 0;
for (let i = 1; i <= 500; i++) {
  middle += i;
}
middle /= 500;
console.log(middle);

//7
let sumPair = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
  sumPair += i;
  }
}
console.log(sumPair);

//8
for ( let i = 100; i <= 200; i++) {
  if(i % 3 === 0) {
    console.log(i);
  }
}

//9
let num = 12;
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}

//10
let numAll = 0;
for (let i = 1; i <= num; i++) {
  if(num % i === 0 && i % 2 === 0) {
    numAll += 1;
  }
}
console.log(numAll);

//11
let numSum = 0;
for (let i = 1; i <= num; i++) {
  if(num % i === 0 && i % 2 === 0) {
    numSum += i;
  }
}
console.log(numSum);

//12
for (let i = 1; i <= 10; i++) {
  for(let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}