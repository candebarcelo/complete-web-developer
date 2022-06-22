// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

var credentials1 = {
    username: "cande",
    password: "123",
};

var credentials2 = {
    username: "ingrid",
    password: "777",
};

var credentials3 = {
    username: "michelle",
    password: "hello",
};

// 2. Create an array which contains the object you have made above and name the array "database".

var database = [credentials1, credentials2, credentials3];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsFeed = [{
    username: "Sophie",
    timeline: "I love cats!",
}, {
    username: "Nick",
    timeline: "Hellooooo!!",
}, {
    username: "Kevin",
    timeline: "Dogs are better",
}];


function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === user && database[i].password === pass) {
            return true;
        }
    }
    return false;
}


function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

var userNamePrompt = prompt("what's your username?");
var passwordPrompt = prompt("what's your password?");

signIn(userNamePrompt, passwordPrompt)
