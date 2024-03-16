'use strict';

const padString = function  (str, num, sign = '*', bool = true) {
  if(str === undefined) return 'Помилка! не має рядка';
  if(num === undefined) return 'Помилка! не має числа';
  if(sign === undefined) return 'Помилка! не має символу';
  if(bool === undefined) return 'Помилка! не має true чи false';

  let result = '';

  if (str.length >= num) {
    result += str.substr(0, num);
  } else if (str.length < num && bool) {
      result += str

      for (let i = result.length; i < num; i++) {
        result += sign
      }
  } else {
      result += str;

      for (let i = result.length; i < num; i++) {
        result = sign + result
      }
    }

  return result;
  }


console.log(padString('Hello', 8, '*', true))