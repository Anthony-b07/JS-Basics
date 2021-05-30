function multipleOp(valIn1, valIn2) {
    var valIn1 = document.getElementById("shoe_size").value;
    var valIn2 = document.getElementById("year").value;
    var multShoe = ((valIn1 * 2 + 5) * 50) / valIn2 + 1766;
    document.getElementById("result").innerHTML = multShoe;
}

document.querySelector('#validate').addEventListener('click', function(event) {
    event.preventDefault();
});