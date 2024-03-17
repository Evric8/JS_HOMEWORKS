'use strict';

const num = prompt('Введіть число!');
const degree = prompt('Введіть ступінь, до якого ' +
  'це число необхідно піднести !');

function mathDegree(one, two = 1) {
  return isNaN(one) || isNaN(two) ?  'помилка' :  Math.pow(one, two);
}

const result = mathDegree(num, degree);

alert(result);