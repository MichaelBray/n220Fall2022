//michaelBray 10/4/2022
//michaelBray 10/4/2022

//array variable
let time = ["3:12","3:43","3:58"];

//loop
for(var i = 0; i < time.length; i++) {
    //create div and elements
    let aDiv = document.createElement("div")
    aDiv.innerHTML = time[i]
    document.body.appendChild(aDiv)
}



