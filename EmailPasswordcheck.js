/* Email Validation */
function checkEmail() {
    var el = document.getElementById("email");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(el.value)) {
        alert("Please provide a valid email address");
        el.focus;
        return false;
    }
}

/* Password Validation */
function validatePassword() {
    var p = document.getElementById("psw").value,
        errors = [];
    if (p.length < 8) {
        errors.push("Your password must be at least 8 characters");
    }
    if (p.search(/[a-z],[A,Z]/i) < 0) {
        errors.push("Your password must contain at least one uppercase and lowercase.");
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    return true;
}