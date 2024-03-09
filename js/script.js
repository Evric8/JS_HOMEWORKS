'use strict';

//1
let a = 14;
a === 0 ? alert('Вірно') : alert('Неправильно');
//2
a > 0 ? alert('Вірно') : alert('Невірно');
//3
a < 0 ? alert('Вірно') : alert('Невірно');
//4
a >= 0 ? alert('Вірно') : alert('Неправильно');
//5
a <= 0 ? alert('Вірно') : alert('Неправильно');
//6
a !== 0 ? alert('Вірно') : alert('Невірно');
//7
String(a) === 'test' ? alert('Вірно') : alert('Неправильно');
//8
String(a) === '1' ? alert('Вірно') : alert('Невірно');
//9
a > 0 && a < 5 ? alert('Вірно') : alert('Невірно');
//10
a === 0 || a === 2 ? alert(a + 7) : alert(a / 10);
//11
let b = 16;
a <= 1 && b >= 3 ? alert(a + b) : alert(a - b);
//12
a > 2 && a < 11 || b >= 6 && b < 14 ? alert('Вірно') : alert('Невірно');
//13
const num = 2;
let result = null;
switch(num) {
  case 1:
    alert(result = 'зима');
    break;
  case 2:
    alert(result = 'весна');
    break;
  case 3:
    alert(result = 'літо');
    break;
  case 4:
    alert(result = 'осінь');
    break;
}