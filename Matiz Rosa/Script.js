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

function Abrir() {
    window.location.href = "file:///C:/Users/USUARIO/Desktop/Matiz%20Rosa/Principal.html";
}

function mostrarFecha() {
    var fecha = new Date();
    var fechaFormateada = fecha.toLocaleDateString();
    document.getElementById("fecha-actual").innerHTML = fechaFormateada;
    document.getElementById("fecha-actual1").innerHTML = fechaFormateada;
    document.getElementById("fecha-actual2").innerHTML = fechaFormateada;
}

setInterval(mostrarFecha, 1000);