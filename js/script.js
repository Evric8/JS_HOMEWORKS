'use strict';

// Task #1
let firstName = prompt('Як Вас звати?');
let lastName = prompt('Як Ваше Прізвище?');
let age = prompt('Скільки Вам років?');

alert(`Дякуєм ${firstName} ${lastName} за реєстрацію (у Вас достатньо років(${age}))!`)

alert('Дякуєм' + ' ' + firstName + ' ' + lastName + ' ' + 'за реєстрацію (у Вас достатньо років('+age+'))!')


// Task #2
let num = 12345;
let str = '' + num;

alert(str[0]+' '+str[1]+' '+str[2]+' '+str[3]+' '+str[4]);
