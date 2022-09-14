//Michael Bray
//9/14/2022


//set variable
var res = 5
//set up plane
function setup() {
    createCanvas(800,800)
}
//draw function with ellipse and redius
function draw(){
background(220)
let res = polarPoint(10)
circle(res.x + 50, res.y + 50, 10)
}
//polar point function
//mutiplying with mouse location
function polarPoint(r){
x = r * Math.sin(mouseX);
y = r * Math.cos(mouseX);
return createVector(x,y);
}