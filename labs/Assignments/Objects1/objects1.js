//michaelBray 9/21/22

//var
let dF= {
    x: 200, y: 100, r: 50
}
let dS = {
    x: 200, y:70, n:180, m:50
}

//base arguments
function setup (){
    createCanvas(800,800)
}
//draw function
function draw(){
    background (200)
//funtions
    dog()
dogSpecs()
}

//object draw dog
function dog(){
circle(dF.x, dF.y,dF.r+10)
circle(dF.x-7,dF.y-5,dF.r-40)
ellipse(dF.x-25,dF.y+5,dF.r-30,dF.r+10)
ellipse(dF.x+25,dF.y+5,dF.r-30,dF.r+10)
circle(dF.x+7,dF.y-5,dF.r-40)
triangle(dF.x, dF.y+2, dF.x+7, dF.x-90, dF.x-7, dF.x-90)
rect(dF.x-10, dF.y+13, dF.r-30, dF.r-43)
}
//object draw specs
function dogSpecs(){
line(dS.x-30, dS.y, dS.n-30, dS.m+20)
line(dS.x-50, dS.y+65, dS.n-30, dS.m+20)
line(dS.x-30, dS.y+65, dS.n-30, dS.m+85)
text("65px",120,105)
line(dS.x-32, dS.y+90, dS.n-12, dS.m+90)
line(dS.x+32, dS.y+90, dS.n-12, dS.m+110)
line(dS.x+32, dS.y+90, dS.n+52, dS.m+90)
text("72px",185,175)
}