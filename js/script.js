'use strict';

const arr = [11, 3];
const myIteral = (arr) => {
    const iterals = Array.from(arr);
    let current = 0;
    return {
        next() {
            let done = false;
            if (current + 1 > iterals.length) {
                done = true;
            }
            const result = {
                value: iterals[current],
                done,
            };
            current += 1;
            return result;
        },
    };
};

const iteral = myIteral(arr);
console.log(iteral);
console.log(iteral.next());
console.log(iteral.next());
console.log(iteral.next());

