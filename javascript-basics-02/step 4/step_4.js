function dialog() {
    let answer = confirm("Are you sure to execute this action?");
    if (answer)
        removeAll();
    else
        alert("Action canceled");

}


function removeAll() {
    document.getElementById('surname').value = "";
    document.getElementById('city').value = "";
    document.getElementById('name').value = "";
}