'use strict';

const arr = [1, 2, 3, -1, -2, -3];

const newArr = function (item) {
  const exampleArr = [];

  if (item.length === 0) {
    return 'Масив порожній!';
  }

  for (let i = 0; i < item.length; i++) {
    if (Math.sign(item[i]) === 1) {
      exampleArr.push(item[i]);
    }
  }

  return exampleArr.length > 0 ? exampleArr : null;
}

console.log(newArr(arr));