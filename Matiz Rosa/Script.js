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
function mostrarFecha() {
    var fecha = new Date();
    var fechaFormateada = fecha.toLocaleDateString();
    document.getElementById("fecha-actual").innerHTML = fechaFormateada;
    document.getElementById("fecha-actual1").innerHTML = fechaFormateada;
    document.getElementById("fecha-actual2").innerHTML = fechaFormateada;
}

setInterval(mostrarFecha, 1000);

function Abrir(){
    window.location.href = "Principal.html";
}
function Alcancias(){
    window.location.href = "C:\Users\USUARIO\Desktop\Matiz%Rosa\ComprarAlcancias.html";
}

function Estatuas(){
    window.location.href = "C:\Users\USUARIO\Desktop\Matiz%Rosa\ComprarEstatuas.html";
}

function Macetas(){
    window.location.href = "C:\Users\USUARIO\Desktop\Matiz%Rosa\ComprarMacetas.html";
}