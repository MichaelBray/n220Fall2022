//Michael Bray Inputs 10/19/22

//get elements from HTML
let txttip = document.getElementById("tip")
//functiom
function rollDice(){
    //set varable for number 
    let txttipnum = Number(txttip.value)
    //console result
console.log("Tip: $" + txttipnum + ". Total: $" + (txttipnum + 26.33))
}