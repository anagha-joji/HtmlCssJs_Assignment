function validateForm() {
    var fn = document.getElementById("fname");
    var ln = document.getElementById("lname");
    var el = document.getElementById("email");
    var psw = document.getElementById("psw");
    var rpsw = document.getElementById("psw-repeat");
    var age = document.getElementById("age");

    if (fn.value == "") {
        alert("First name cannot be blank");
    } else if (ln.value == "") {
        alert("Last name cannot be blank");
    } else if (el.value == "") {
        alert("Email cannot be blank");
    } else if (psw.value == "") {
        alert("Password cannot be blank");
    } else if (rpsw.value == "") {
        alert("Repeat Password cannot be blank");
    } else if (age.value == "") {
        alert("Age cannot be blank");
    } else {

    }

}