var res = 5

function setup() {
    createCanvas(800,800)
}

function draw(){
background(220)
let res = polarPoint(10)
circle(res.x + 50, res.y + 50, 10)
}

function polarPoint(r){
x = r * Math.sin(mouseX);
y = r * Math.cos(mouseX);
return createVector(x,y);
}