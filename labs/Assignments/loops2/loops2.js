//michaelBray 10/4/2022

//loop
for(var i = 1; i < 26; i++) {
    //create div and div elements



    let aDiv = document.createElement("div")
    aDiv.innerHTML = i

    if(i % 5 == 0){
        aDiv.innerHTML = "bop";
    }
    if(i % 3 == 0){
        aDiv.innerHTML = "beep";
    }
    if(i % 3 == 0 && i % 5 == 0){
    aDiv.innerHTML = "beepbop";
}
    document.body.appendChild(aDiv)

//if statements beep, bop, beepbop



}

