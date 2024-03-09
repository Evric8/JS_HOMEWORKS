'use strict';

// 1
let x = 10, y = 7;
x > y ? alert(`x більше за y`) : alert(`x не більше за y`);

// 3
const num = prompt('Введіть ціле число');

if (Number(num)) {
  if(Math.sign(+num) === +1) {
    if(num.length === 1) {
      alert(`Число ${num} однозначне позетивне`)
    } else if(num.length === 2) {
      alert(`Число ${num} двозначне позетивне`)
    } else if(num.length === 3) {
      alert(`Число ${num} трьохзначне позетивне`)
    }
  } else if (Math.sign(+num) === -1) {
    if(num.length - 1 === 1) {
      alert(`Число ${num} однозначне негативне`)
    } else if(num.length - 1 === 2) {
      alert(`Число ${num} двозначне негативне`)
    } else if(num.length - 1 === 3) {
      alert(`Число ${num} трьохзначне негативне`)
    }
  }
}

// 4
const firstNum = +prompt('Введіть перше число!');
const secondNum = +prompt('Введіть друге число!');
const thirdNum = +prompt('Введіть трете число!');

if(firstNum > secondNum && firstNum > thirdNum) {
  alert(firstNum);
} else if (secondNum > firstNum && secondNum > thirdNum) {
  alert(secondNum);
} else if (thirdNum > firstNum && thirdNum > secondNum) {
  alert(thirdNum);
}


// 5
const firstLong = +prompt('Введіть довжину першої сторони трикутника!');
const secondLong = +prompt('Введіть довжину другої сторони трикутника!');
const thirdLong = +prompt('Введіть довжину третьої сторони трикутника!');

if(firstLong + secondLong > thirdLong
  && firstLong + thirdLong > secondLong
  && secondLong + thirdLong > firstLong) {
  alert('При таких довжинах трикутник може існувати')
} else {
  alert('При таких довжинах трикутник не може існувати')
}