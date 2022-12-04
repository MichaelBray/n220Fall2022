//Michael Bray Space Invaders 11/30/2022

//variables and objects

function setup(){
createCanvas (800,600);
strokeWeight(2);
ellipseMode(RADIUS);
}


let invx = 100
let invy = 100
let invxs = 1
let invys = 0
let plax = 350
let play = 570
let plaxs = 0




   function draw(){
    background(200)
    invx = invx + invxs
    invy = invy + invys
 rect(invx, invy, 10, 20)
    rect(invx +30, invy, 10, 20)
    rect(invx+5, invy-20, 30, 20)

    if (invx > 700){
        invxs = 0
        invys = 1
    }
    if (invy == 150 && invx > 700 ){
        invys = 0
        invxs = -1
    }
    if (invx < 100){
        invxs = 0
        invys = 1
    }
    if (invy == 250 && invx < 100){
        invxs = 1
        invys = 0
    }
    if (invy == 350 && invx > 700){
        invys = 0
        invxs = -1
    }
    if (invy == 450 && invx < 100){
        invxs = 1
        invys = 0
    }
    if (invy == 450 && invx == 400){
        invys = 1
        invxs = 0
    }
    if (invy == 500){
        invys = 0
        invxs = 0
        text("GAME OVER",500,500)
    }
//------------------

rect(plax+20, play-40, 10, 20)
    rect(plax +7.5, play-20, 35, 20)
    rect(plax, play, 50, 20)
    plax = plax + plaxs




    if(keyIsDown(LEFT_ARROW)){
plaxs = -3
    }
    if(keyIsDown(RIGHT_ARROW)){
        plaxs = 3
            }
            if (plax > 700){
                plaxs -1
            }
            if (plax < 100){
                plaxs +1
            }

            
            if(keyIsDown(UP_ARROW)){
            shoot()
                    }
 }
 let lzrx = plax
 let lzry = 550
 let lzrxs = 0
 let lzrys = 0
 function shoot(){
    for(var i = 1; i < 10; i++) {
            rect(lzrx,lzry,10,10)
    }
lzry = lzry + lzrys
lzrx = lzrx + lzrxs
    lzrx = plax
    lzrxs = 0
    lzrys = -10
}