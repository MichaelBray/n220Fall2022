//Michael Bray Inputs 10/19/22

//get elements from HTML
let txt = document.getElementById("tip")
let res = document.getElementById("result")

//function
function rollDice(){
    let txtnum = Number(txt.value)
    let i = 8

    //if statemants for results
if(txtnum == i){
res.innerHTML = "CORRECT!"
}
if(txtnum > i){
res.innerHTML = "Lower, try again"
}
if(txtnum < i){
res.innerHTML = "Higher, try again"
}

//reset text
txt.value = ""
}