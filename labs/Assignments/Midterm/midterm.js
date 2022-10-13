//Michael Bray 10/12/2022
//variables
let div = document.getElementById("div")
let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")
let div4 = document.getElementById("div4")
let div5 = document.getElementById("div5")
let div6 = document.getElementById("div6")
let x = "100px"
let y = "100px"

//styling
div.style.backgroundColor = "#00f"
div.style.width = x
div.style.height = y

div1.style.backgroundColor = "#0ff"
div1.style.width = x
div1.style.height = y

div2.style.backgroundColor = "#0ff"
div2.style.width = x
div2.style.height = y

div3.style.backgroundColor = "#0ff"
div3.style.width = x
div3.style.height = y

div4.style.backgroundColor = "#0ff"
div4.style.width = x
div4.style.height = y

div5.style.backgroundColor = "#0ff"
div5.style.width = x
div5.style.height = y

div6.style.backgroundColor = "#0ff"
div6.style.width = x
div6.style.height = y
// function
function doThing1() {
    div1.style.backgroundColor = "#0f0"
    div1.innerHTML = "."
    div.innerHTML = "hello"
    div2.innerHTML = "how"
    div3.innerHTML = "are"
    div4.innerHTML = "you"
    div5.innerHTML = "doing"
    div6.innerHTML = "today!"
    div2.style.backgroundColor = "#0ff"
    div3.style.backgroundColor = "#0ff"
    div4.style.backgroundColor = "#0ff"
    div5.style.backgroundColor = "#0ff"
    div6.style.backgroundColor = "#0ff"
}
function doThing2() {
    div1.style.backgroundColor = "#0ff"
    div2.style.backgroundColor = "#0f0"
    div2.innerHTML = "."
    div.innerHTML = "how"
    div1.innerHTML = "hello"
    div3.innerHTML = "are"
    div4.innerHTML = "you"
    div5.innerHTML = "doing"
    div6.innerHTML = "today!"
    div3.style.backgroundColor = "#0ff"
    div4.style.backgroundColor = "#0ff"
    div5.style.backgroundColor = "#0ff"
    div6.style.backgroundColor = "#0ff"
}
function doThing3() {
    div1.style.backgroundColor = "#0ff"
    div2.style.backgroundColor = "#0ff"
    div3.style.backgroundColor = "#0f0"
    div3.innerHTML = "."
    div.innerHTML = "are"
    div2.innerHTML = "are"
    div1.innerHTML = "hello"
    div4.innerHTML = "you"
    div5.innerHTML = "doing"
    div6.innerHTML = "today!"
    div4.style.backgroundColor = "#0ff"
    div5.style.backgroundColor = "#0ff"
    div6.style.backgroundColor = "#0ff"
}
function doThing4() {
    div1.style.backgroundColor = "#0ff"
    div2.style.backgroundColor = "#0ff"
    div3.style.backgroundColor = "#0ff"
    div4.style.backgroundColor = "#0f0"
    div4.innerHTML = "."
    div.innerHTML = "you"
    div2.innerHTML = "how"
    div3.innerHTML = "are"
    div1.innerHTML = "hello"
    div5.innerHTML = "doing"
    div6.innerHTML = "today!"
    div5.style.backgroundColor = "#0ff"
    div6.style.backgroundColor = "#0ff"
}
function doThing5() {
    div1.style.backgroundColor = "#0ff"
    div2.style.backgroundColor = "#0ff"
    div3.style.backgroundColor = "#0ff"
    div4.style.backgroundColor = "#0ff"
    div5.style.backgroundColor = "#0f0"
    div5.innerHTML = "."
    div.innerHTML = "doing"
    div2.innerHTML = "how"
    div3.innerHTML = "are"
    div4.innerHTML = "you"
    div1.innerHTML = "hello"
    div6.innerHTML = "today"
    div6.style.backgroundColor = "#0ff"
}
function doThing6() {
    div1.style.backgroundColor = "#0ff"
    div2.style.backgroundColor = "#0ff"
    div3.style.backgroundColor = "#0ff"
    div4.style.backgroundColor = "#0ff"
    div5.style.backgroundColor = "#0ff"
    div6.style.backgroundColor = "#0f0"
    div6.innerHTML = "."
    div.innerHTML = "today!"
    div2.innerHTML = "how"
    div3.innerHTML = "are"
    div4.innerHTML = "you"
    div5.innerHTML = "doing"
    div1.innerHTML = "hello"
}