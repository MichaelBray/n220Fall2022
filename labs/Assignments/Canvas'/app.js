function setup () {
createCanvas (800,600);
strokeWeight(2);
ellipseMode(RADIUS);
}

function draw(){
background(255);

//brace
stroke(100)
line (150,300,150,280)
line (350,300,350,280)


//screen
noStroke(0)
fill (20)
rect (100,140,300,150)
fill (255)
rect (110,150,280,130)

//keyboard
noStroke(0);
fill(20)                    //black
rect(100,300,300,100)       //base plate
fill (220)                  //light grey
rect (200,365,100,25)       //trackpad
rect (130,308,240,50)       //keyboard
fill(170);                  //light grey
ellipse(380,385,10,7);      //powerbutton
}