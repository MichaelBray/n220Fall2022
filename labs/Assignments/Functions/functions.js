let x = 0
let y = 0
let h = 40
let g = 12

function setup() {
    createCanvas(800,800)
}

function draw(){
drawDrawer(mouseX, mouseY)
drawDrawer(mouseX - 100, mouseY + 200)
drawDrawer(mouseX + 200, mouseY - 100)
}

function drawDrawer(x,y){
    rect(x,y,h+10,h)
    rect(x+5,y+7,h,g)
    rect(x+5,y+23,h,g)
    rect(x+5,y+40,g-2,g-4)
    rect(x+35,y+40,g-2,g-4)
    circle(x+25,y+13,g-5)
    circle(x+25,y+29,g-5)
}