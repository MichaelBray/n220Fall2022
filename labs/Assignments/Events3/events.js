//Michael Bray 11/13/22
//event function
function itClicked(event){

    let response = event.target.getAttribute("data")
    //display data attribute text
    event.target.innerHTML = response


}
