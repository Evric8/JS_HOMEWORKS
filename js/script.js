'use strict';

import  Student  from "./Student.js";
// console.log(Student);
const alex = new Student("Alex", "Bob", 2002)
const john = new Student("John", "Bob", 1980)
const petar = new Student("Petar", "Bob", 1998)

console.log(alex);
console.log(alex.getAge());
console.log(alex.present());
console.log(alex.setGrade(100));
console.log(alex.present());
console.log(alex.setGrade(90));
console.log(alex.present());
console.log(alex.setGrade(100));
console.log(alex.present());
console.log(alex.setGrade(100));
console.log(alex.summary());



console.log(john);
console.log(john.getAge());
console.log(john.present());
console.log(john.setGrade(100));
console.log(john.absent());
console.log(john.absent());
console.log(john.summary());


console.log(petar);
console.log(petar.getAge());
console.log(petar.absent());
console.log(petar.absent());
console.log(petar.present());
console.log(petar.summary());