function ageVal(inp) {
    var under = "You're under 18";
    var over = "You're over 18";
    var inp = document.getElementById("age").value;
    if (inp < 18)
        alert(under);
    else alert(over);
}