//Michael Bray 10/12/2022
//variables
let i = ["rock","paper","scissors","guard"]
let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")
let div4 = document.getElementById("div4")
let ndiv = document.getElementById("ndiv")
let x = "100px"
let y = "50px"

//styling
div1.style.backgroundColor = "#0ff"
div1.style.width = x
div1.style.height = y

div2.style.backgroundColor = "#0ff"
div2.style.width = x
div2.style.height = y

div3.style.backgroundColor = "#0ff"
div3.style.width = x
div3.style.height = y

div4.style.backgroundColor = "#0ff"
div4.style.width = x
div4.style.height = y

//functions
function rock() {
    i = i (random)
    if(i = 2){
      div1.style.backgroundColor = "#0f0"  
      ndiv.innerHTML + 1
    }
    if(i = 1,3){
        div1.style.backgroundColor = "#f00"  
        ndiv.innerHTML - 1
      }
      if(i = 0){
        div1.style.backgroundColor = "#aaa"  
      }
      div1.style.backgroundColor = "#0ff"
}
function paper() {
    i = i (random)
    if(i = 0){
      div1.style.backgroundColor = "#0f0"  
      ndiv.innerHTML + 1
    }
    if(i = 2,3){
        div1.style.backgroundColor = "#f00"  
        ndiv.innerHTML - 1
      }
      if(i = 1){
        div1.style.backgroundColor = "#aaa"  
      }
      div1.style.backgroundColor = "#0ff"
}
function scissors() {
    i = i(random)
    if(i = 1){
      div1.style.backgroundColor = "#0f0"  
      ndiv.innerHTML + 1
    }
    if(i = 0,3){
        div1.style.backgroundColor = "#f00"  
        ndiv.innerHTML - 1
      }
      if(i = 2){
        div1.style.backgroundColor = "#aaa"  
      }
      div1.style.backgroundColor = "#0ff"
}
function guard() {
        div1.style.backgroundColor = "#aaa"  
      div1.style.backgroundColor = "#0ff" 
}