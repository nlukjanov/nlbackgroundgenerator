var _ = require('lodash');

var array = [1,2,3,4,5,6,7,8];

console.log('answer:', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var cssDisplay = document.querySelector(".cssDisplay");
var randomColor = document.querySelector(".randomColor");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    displayCss();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    console.log("start");
    randomColor1 = getRandomColor();
    randomColor2 = getRandomColor();
    body.style.background =
        "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";

    color1.value = randomColor1;
    color2.value = randomColor2;

    displayCss();
}

function displayCss() {
    cssDisplay.textContent = "Background-color: " + body.style.background + ";";
}


randomColor.addEventListener("click", setRandomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

