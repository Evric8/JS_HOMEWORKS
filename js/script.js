'use strict';


const degree = prompt('Введіть кількість градусів.');
const meaning = prompt('Введіть символ С - якщо ' +
  'температура в градусах Цельсія, ' +
  'або F - якщо температура в градусах Фаренгейта');
let result = null;

if (meaning === 'C') {
  result = (degree * 1.8) + 32;
} else {
  result = (degree - 32) / 1.8;
}

alert(result);

// ° C = (° F -32) / 1,8        ° F = (° C * 1,8) + 32