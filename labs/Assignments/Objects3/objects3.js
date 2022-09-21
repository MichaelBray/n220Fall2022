//michaelBray 9/21/22

//var
let b = {xP: 0, yP: 0, xS: 5, yS: 5};
//base arguments
function setup(){
    createCanvas (800,600)
}

//circle start
function draw() {
background (200)
//ball function
ball()
//if statements to make it bounce
if (b.yP > 600){
    b.yS = -5
}
if (b.xP > 800){
    b.xS = -5
}
if (b.yP < 0){
    b.yS = 5
}
if (b.xP < 0){
    b.xS = 5
}
}
//ball objet
function ball() {
    circle(b.xP, b.yP, 50)
b.xP = b.xP + b.xS;
b.yP = b.yP + b.yS;

}
