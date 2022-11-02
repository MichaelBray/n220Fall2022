let div = document.getElementById ("div")
let type = document.getElementById ("type")



  let tally = 0
    console.log  (tally)

function roll(){
    let sent = type.value
    let tSplit = sent.split(" ")
  
for(let i = 0; i < tSplit.length; i++){
    console.log  (tally)
if(tSplit[i].toLowerCase().includes("clear")){
    tally++
div.innerHTML = (tally)
}
if(tSplit[i].toLowerCase().includes("water")){
    tally++
div.innerHTML = (tally)
}
if(tSplit[i].toLowerCase().includes("tires")){
    tally++
div.innerHTML = (tally)
}
}
type.value = ""
}

