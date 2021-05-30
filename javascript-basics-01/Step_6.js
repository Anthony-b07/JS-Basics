function divide(valInput1, valInput2) {

    var valInput1 = document.getElementById("first_number").value;
    var valInput2 = document.getElementById("second_number").value;
    var sum = (valInput1 % valInput2);
    document.getElementById("result").innerHTML = sum;
}

document.querySelector('#validate').addEventListener('click', function(event) {
    event.preventDefault();
});