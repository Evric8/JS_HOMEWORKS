'use strict';


// Задача 1
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;



// Задача 2
/* Сам об'єкт, оголошений за допомогою const неможна змінювати,
але можна змінювати властивості всередині об'єкта а також додавати
чи видаляти їх.
 */



// Задача 3
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

// example first
// for (let key in salaries) {
//   sum += salaries[key];
// }

// example second
for (let value of Object.values(salaries)) {
  sum += value;
}
console.log(sum);