'use strict';

const num = prompt('Введіть число!');

const end = +num[num.length-1];
const endTwo = num.slice(-2);

if(Number(num)) {
  if(num >= 5 && num < 9 || end >=5 && end <= 9
    || end === 0 || endTwo > 10 && endTwo < 20) {
    alert(`Вам ${num} років.`)
  } else if (+num === 1 || end === 1) {
    alert(`Вам ${num} рік.`)
  } else if(num >= 2 && num <= 4 || end >=2 && end <= 4) {
    alert(`Вам ${num} роки.`)
  }
}