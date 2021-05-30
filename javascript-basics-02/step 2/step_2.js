var inp = document.querySelector("input");

inp.addEventListener("blur", myBlurr);

function myBlurr() {
    alert("Input field lost focus.");
};