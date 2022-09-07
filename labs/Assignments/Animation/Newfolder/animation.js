var x = 100;

function setup(){
    createCanvas (800,600)
}
//ellipse go right
function draw(){
    background(100);
    ellipse(x,100,100,100)
    x = x + 5;
//ellipse go back to start
if (x > 800){
    x = 100
}
}
