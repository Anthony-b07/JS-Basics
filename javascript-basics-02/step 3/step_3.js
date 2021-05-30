document.querySelector("input").addEventListener("change", myFunction);

function myFunction() {
    var value = document.getElementById("name").value;
    document.querySelector("div").innerHTML = value;

};