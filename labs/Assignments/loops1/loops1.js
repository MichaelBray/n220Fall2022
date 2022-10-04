//michaelBray 10/4/2022

//Array and connect to HTML variables
let num = ["1000","2000","3000","4000","5000"];
let counter = document.getElementById("counter")


//loop
for(var i = 0; i < num.length; i++) {
    //display element
counter.innerHTML += num[i]; 
}

