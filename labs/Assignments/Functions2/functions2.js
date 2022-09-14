let noRed = (170,200,150)

function setup() {
    createCanvas(800,800)
}

function draw(){
background(200)
let myColor = removeRed()
fill(myColor);
circle(20,20,20,20)
}

function removeRed (){
    let noRed = color(170,200,150);
noRed.setRed(0)
return noRed;
}