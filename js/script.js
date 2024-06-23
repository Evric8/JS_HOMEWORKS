'use strict';

class Person {
    _name = null;
    _sex = null;
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    get name(){
        return this._name
    }
    set name(value){
        if(value.length < 3){
            console.log('Імя занадто коротке');
            return
        }
        this._name = value
    }
    get sex(){
        return this._sex
    }
    set sex(value){
        this._sex = value
    }
}

class Apartment {
    people = [];
    addPerson(classPerson){
        if(!this.people.includes(classPerson)){
            this.people.push(classPerson)
        } else {
            return this.people
        }
    }
}

class Home {
    arrApartment = new Array();
    constructor(maxFlat = 8){
        this.maxFlat = maxFlat;
    }
    addFlat(classApartment){
        if(this.maxFlat > this.arrApartment.length){
            this.arrApartment.push(classApartment)
        } else {
            console.log('Кількість квартир перевищила максимальну кількість квартир');
        }
    }
}

//
const person1 = new Person('Ivan', 'male')
const person2 = new Person('Alex', 'female')
const person3 = new Person('Oleg', 'mail')

const flat1 = new Apartment();
const flat2 = new Apartment();
const flat3 = new Apartment();
flat1.addPerson(person1);
flat1.addPerson(person2);
flat1.addPerson(person3);
flat2.addPerson(person2);
flat2.addPerson(person3);
flat3.addPerson(person3);

const houm = new Home(2);
houm.addFlat(flat1)
houm.addFlat(flat2)
houm.addFlat(flat3)
console.log(houm);