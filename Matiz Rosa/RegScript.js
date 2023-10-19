function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var eyeIcon = document.querySelector(".toggle-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.textContent = "🙈"; 
    }else {
        passwordField.type = "password";
        eyeIcon.textContent = "👁️"; 
    } 
}

function togglePasswordVisibility1() {
    var passwordField = document.getElementById("Rpassword");
    var eyeIcon = document.querySelector(".Rtoggle-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.textContent = "🙈"; 
    }else {
        passwordField.type = "password";
        eyeIcon.textContent = "👁️"; 
    } 
}
