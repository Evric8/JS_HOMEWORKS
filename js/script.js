'use strict';


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep() {
        return this
    }

};

console.log(ladder.up().up().down().showStep())


