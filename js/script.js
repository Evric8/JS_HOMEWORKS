'use strict';

// Task #1
const firstName = prompt('Як Вас звати?');
const lastName = prompt('Як Ваше Прізвище?');
const age = prompt('Скільки Вам років?');

alert(`Дякуєм ${firstName} ${lastName} за реєстрацію (у Вас достатньо років(${age}))!`)


// Task #2
const num = 12345;

alert(num.toString().split('').join(' '));