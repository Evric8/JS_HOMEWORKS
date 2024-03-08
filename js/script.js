'use strict';

const active = prompt('Введіть щось одне, ' +
  'те що Ви хочете зробити' +
  'add, sub, mult, div');
const firstNum = +prompt('Введіть перше число!');
const secondNum = +prompt('Введіть друге число!');


if(active === 'add'){
  console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
} else if (active === 'sub') {
  console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
} else if (active === 'mult'){
  console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
} else if (active === 'div'){
  console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
}

