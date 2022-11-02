let div = document.getElementById ("div")
let type = document.getElementById ("type")

function roll(){
    let stringV = type.value
    let tSplit = stringV.split(" ")
    let myArray = tSplit
    let sum = 0
    for(let i = 0; i < myArray.length; i++){
        sum += Number(myArray[i])
    }
div.innerHTML = (sum)
type.value = ""
}

