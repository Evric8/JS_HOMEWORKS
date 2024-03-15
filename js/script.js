'use strict';


const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) {
  let str = '';

  for (let i = 1; i <= length; i++) {
    str += characters[Math.round(Math.random() * characters.length)];
  }

  return str;
}

const key = generateKey(16, characters);

console.log(key);