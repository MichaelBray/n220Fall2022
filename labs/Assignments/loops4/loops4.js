//array
let fav = ["pepsi","oreos","pokemon","photography","games"];

//loop
for(var i = 0; i < fav.length; i++) {
    //create div and div elements
    let aDiv = document.createElement("div")
    aDiv.innerHTML = fav[i] + " is one of my favorite things"
    document.body.appendChild(aDiv)
}
