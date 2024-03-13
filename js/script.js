'use strict';


let sum = 0;
ofLoop: for (let i = 1; i <= 20; i++) {
 if (i % 2 !== 0) {
    sum += i;
 } else   if (sum % 2 === 0) {
   break ofLoop;
 }
}
alert(sum);