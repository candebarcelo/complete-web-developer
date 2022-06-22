// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const array2 = []
const array2Fill = array.forEach(obj => {
  array2.push(obj.username + "!");
})
console.log(array2);

//Create an array using map that has all the usernames with a "? to each of the usernames

const newArray = array.map(obj => obj.username + "?");
console.log(newArray);

//Filter the array to only include users who are on team: red

const filteredArray = array.filter(obj => obj.team === "red");
console.log(filteredArray);

//Find out the total score of all users using reduce

const reducedResult = array.reduce((accumulator, obj) => accumulator + obj.score, 0);
console.log(reducedResult);

// (1), what is the value of i?

// the index!!!


// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => 
	// console.log(num, i);
	// alert(num);
	num * 2 );
console.log(newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
// my answer:
const itemsArray = array.map(obj => obj.items.map(item => item + "!"));
const finalArray = array
const finalArrayFunc = array.forEach((obj, i) => {
  return obj.items = itemsArray[i];
})
console.log(finalArray);


// andrei's answer:
const simpleAnswer = array.map(obj => {
  obj.items = obj.items.map(item => item + "!"); 
  return obj;
})
console.log(simpleAnswer);

