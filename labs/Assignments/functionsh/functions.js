//Michael Bray HTML Functions 10/28/22

//get elements from HTML
let txt = document.getElementById("type")
let res = document.getElementById("result")

//function
function roll(){
    let txtnum = Number(txt.value)

//if and else statemants
if(txtnum % 7 == 0 ){
res.innerHTML = "True"
}
else{
    res.innerHTML = "false"
}

//reset text
txt.value = ""
}