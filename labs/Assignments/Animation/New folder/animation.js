var x = 300;
var y = 280;
var z = 100;
var a = 150;

function setup() {
    createCanvas(2000,2000);
    background(200);
}
function draw() {
if(mouseIsPressed == true) {

translate(mouseX,mouseY);
scale(mouseX / 300.0)
scale(mouseY /500.0)
    //brace
    stroke(100)                 //grey
    line (a,x,a,y)      //left brace
    line (350,x,350,y)      //right brace
    
    //screen
    noStroke(0)                 
    fill (20)                   //black
    rect (z,140,x,a)      //bevels
    fill (255)                  //white
    rect (110,a,y,130)      //display
    
    //keyboard
    noStroke(0);
    fill(20)                    //black
    rect(z,x,x,z)       //base plate
    fill (220)                  //light grey
    rect (200,365,z,25)       //trackpad
    rect (130,308,240,50)       //keyboard
    fill(170);                  //light grey
    ellipse(380,385,10,7);      //powerbutton
    }
}