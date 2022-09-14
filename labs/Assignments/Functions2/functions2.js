//Michael Bray
//9/14/2022


//varibale defined
let noRed = (170,200,150)
//seting up plane
function setup() {
    createCanvas(800,800)
}
//draw function
function draw(){
background(200)
let myColor = removeRed()
//ellipse with noRed function
fill(myColor);
circle(20,20,20,20)
}
//red removal function
function removeRed (){
    let noRed = color(170,200,150);
noRed.setRed(0)
return noRed;
}