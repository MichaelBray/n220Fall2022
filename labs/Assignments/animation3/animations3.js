var x = 1;

function setup(){
    createCanvas (800,600)
}
//ellipse grows
function draw(){
    background(100);
    ellipse(400,300,x,x)
    x = x + 1;
//ellipse goes back to origional size
if (x > 200){
    x = 1
}
}
