// Array Of Digits In Hex Code
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Targeting Variables 
const btn = document.getElementById('button')
const color = document.querySelector('.hex-color');

btn.addEventListener('click', function() {
// Generate The Hex Value On Click   
let hexColor = '#';
for (i = 0; i < 6; i++) {
    hexColor += hex[getRandomValue()];
}
// Change Body Colour & Div Text To The Random Hex Color
document.body.style.backgroundColor = hexColor;
color.textContent = hexColor;
color.style.color = hexColor;

})
// Function to return a random value from any given array
function getRandomValue () {
    return Math.floor(Math.random() * hex.length);
}