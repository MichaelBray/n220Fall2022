//Michael Bray 2/28/2022

//variables
let tdiv = document.getElementById("sq")
let x = 100
let y = 100

console.log("me");

//styling
tdiv.innerHTML = "mc"
tdiv.style.backgroundColor = "#0f0"
tdiv.style.width = x
tdiv.style.height = y

//grow function
function grow() {
    tdiv.style.width = x + "px"
    tdiv.style.height = y + "px"
x = x * 1.1
y = y * 1.1
}
