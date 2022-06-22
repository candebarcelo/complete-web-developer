// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// // it should look like this:
// '     ||<- Start line'
// '       🐢'
// '       🐇'

// // when you do:
// console.log(startLine);
// console.log(turtle);
// console.log(rabbit);

//
turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);
//

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

//
// '🐢========'
//

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
// 'my name is Rudolf the raindeer'

// my answer (kinda chota):
const wordify = obj => {
  const worded = Object.entries(obj);
  return worded[0][0].concat(worded[0][1], worded[1][0], worded[1][1], worded[2][0], worded [2][1])
}

wordify(obj)

// andrei's answer (better): 
Object.entries(obj).map(value => value.join(" ")).join(" ")

