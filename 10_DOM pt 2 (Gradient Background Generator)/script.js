var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

css.textContent = "linear-gradient(to right, red , yellow);";

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    // this lets u change the background
    css.textContent = body.style.background + ";";
    // this writes as text the content of the background in the css file
} 

function randomColors() {
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    body.style.background = "linear-gradient(to right, #" + randomColor1 + ", #" + randomColor2 + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
// instead of this, u could also add an attribute 'oninput="setGradient()"' to each of the
// <input> tags in the html file. or an 'onclick=...'. but that's not very good bc of 
// separation of concerns.

button.addEventListener("click", randomColors);

