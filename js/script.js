'use strict';

//1
for (let i = 20; i <= 30; i += 0.5) {
  console.log(i);
}

//2
const dollar = 27;
for(let i= 10; i <= 100; i += 10) {
  console.log(i * dollar);
}

//3
let integer = 10;
for (let i = 1; i <= 100; i++) {
  if(i ** 2 < integer) {
    console.log(i);
  }
}

//4
 let integerTwo = 7;
 let sumInteger = '';
 for (let i = 2; i <= integerTwo -1; i++) {
   if (integerTwo % i === 0) {
     sumInteger += `${i}, `
     break;
   }
 }
if(sumInteger === '') {
  console.log(`Просте число`)
} else {
  console.log(`Не просте число`)
}

//5
let n = 243;
for (let i = 3; i <= n; i *= 3) {
  if (i === n){
    console.log('Так')
  }
}