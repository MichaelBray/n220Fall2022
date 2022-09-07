let xPos = 0
let yPos = 0
let xSpeed = 5
let ySpeed = 5

function setup(){
    createCanvas (800,600)
}

//circle start
function draw() {
background (200)
xPos = xPos + xSpeed;
yPos = yPos + ySpeed;
circle(xPos, yPos, 50)

//change directionn
if (yPos > 600){
    ySpeed = -5
}
if (xPos > 800){
    xSpeed = -5
}
if (yPos < 0){
    ySpeed = 5
}
if (xPos < 0){
    xSpeed = 5
}


}
