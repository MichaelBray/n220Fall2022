//Michael Bray HTML Functions 10/28/22

//get elements from HTML
let res = document.getElementById("result")

//function
function roll(){
        let num = Math.floor(Math.random() * 10) 
    res.innerHTML = num
}