'use strict';

const one = +prompt('Введіть число.');
const two = +prompt('Введіть друге число.');

console.group();
console.log(`Результат: ${one} + ${two} = ` + (one + two));
console.log(`Результат: ${one} - ${two} = ` + (one - two));
console.log(`Результат: ${one} * ${two} = ` + (one * two));
console.log(`Результат: ${one} / ${two} = ` + (one / two));
console.groupEnd();