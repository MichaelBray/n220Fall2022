//michaelBray 9/21/22

//vars
let r = { x: 20, y: 180};
let l = { x:370, y: 180};
//base arguments
function setup(){
    createCanvas(400,400)
}
//draw setup
function draw(){
background(200)
//functions
left()
right()
//if statements to make recs move
if(keyIsDown(UP_ARROW)){
l.y = l.y + 2
r.y = r.y - 2
}

if(keyIsDown(DOWN_ARROW)){
    l.y = l.y - 2
    r.y = r.y + 2
    }

}
//object left rect
function left(){
rect(l.x,l.y,10,30)
}
//object right rect
function right(){
    rect(r.x,r.y,10,30)
}