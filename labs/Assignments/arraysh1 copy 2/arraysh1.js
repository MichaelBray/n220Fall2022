let div = document.getElementById ("div")
let objects = [

    { color: "#FF0000", height: "100px", width: "300px" },
   
    { color: "#FFFF00", height: "200px", width: "200px" },
   
    { color: "#ff0000", height: "300px", width: "100px" },
   
   ];

   for(var i = 0; i < objects.length; i++) {
    let aDiv = document.createElement("div")
    aDiv.innerHTML = "hello"
    aDiv.style.backgroundColor = objects[i].color
    aDiv.style.width = objects[i].width
    aDiv.style.height = objects[i].height
    document.body.appendChild(aDiv)
}



