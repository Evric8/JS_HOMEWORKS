'use strict';

const action = prompt('Що Ви хочете зробити, вкажіть щось одне' +
  ' (add, sub, mult, div)?');
const one = +prompt('Вкажіть перше число.');
const two = +prompt('Вкажіть друге число.');

if(action === 'add') {
  console.log(`${one} + ${two} = `+(one+two));
} else if (action === 'sub') {
  console.log(`${one} - ${two} = `+(one - two));
} else if (action === 'mult') {
  console.log(`${one} * ${two} = `+(one * two));
} else if (action === 'div') {
  console.log(`${one} / ${two} = `+(one / two));
}