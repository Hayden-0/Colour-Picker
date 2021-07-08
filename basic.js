// Array of fixed color values of different types
const colors = ["green", "red", "#FF5733", "rgba(133,122,200", "#5db50e", "#432165", "#afe7b6", "#221b20"];

// Targeting Variables
const btn = document.getElementById('button');
const color = document.querySelector('.hex-color');
const color_container = document.querySelector('.colour-container')
const h3 = document.querySelector('.colour-container h3')

btn.addEventListener('click', function(){
    // Get Random Number for the index of the colors array.
    const randomNumber = getRandomNumber();

    // Change the body background color by targeting the array index with the generated random number
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
    
    // If the value is the darker colour I have in the array change colors to white so user can still see the text
    if (randomNumber == 7) {
        color_container.style.backgroundColor = "white";
        h3.style.color = "#1B1B1B"
    } else {
        color_container.style.backgroundColor = "#1B1B1B"
        h3.style.color = "white";
    }
})

// Function to get a random number from a array
function getRandomNumber () {
    return Math.floor(Math.random() * colors.length);
}