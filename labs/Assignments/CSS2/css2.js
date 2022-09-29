//Michael Bray 2/28/2022

//variables
let tdiv = document.getElementById("sq")
let x = 100
let y = 100
let i = 0

//styling

tdiv.style.backgroundColor = "#0f0"
tdiv.style.width = x
tdiv.style.height = y

//function
function txt() {
i = i + 1
if (i < 3){
    tdiv.innerHTML = "mc"
}

if (i > 2){
    tdiv.innerHTML = "divdivdiv"
}

   }
   