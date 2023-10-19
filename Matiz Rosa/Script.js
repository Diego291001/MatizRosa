function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var eyeIcon = document.querySelector(".toggle-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.textContent = "🙈"; 
    } else {
        passwordField.type = "password";
        eyeIcon.textContent = "👁️"; 
    }
}