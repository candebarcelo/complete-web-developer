const fs = require('fs');

console.time('totalTime');
console.time('challenge');
const file = fs.readFileSync('./AoC_day1_2015_input.txt').toString();

const directions = (input) => {
    let floor = 0
    for (parenthesis of input) {
        if (parenthesis === '(') {
            floor ++
        } else if (parenthesis === ')') {
            floor --
        }
    }
    console.timeEnd('challenge');
    return floor;
}


console.log(directions(file));

// part 2

console.time('challenge2')
const basementPosition = input => {
    let floor = 0
    let i = 1
    for (parenthesis of input) {
        if (parenthesis === '(') {
            floor ++
        } else if (parenthesis === ')') {
            floor --
            if (floor === -1) {
                console.timeEnd('challenge2');
                return i;
            }
        }
        i ++
    }
}


console.log(basementPosition(file));
console.timeEnd('totalTime');