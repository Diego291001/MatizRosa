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

function redirigir() {
    window.location.href = 'file:///C:/Users/USUARIO/Desktop/Matiz%20Rosa/ComprarAlcancias.html';
}
function redirigir1() {
    window.location.href = 'file:///C:/Users/USUARIO/Desktop/Matiz%20Rosa/ComprarEstatuas.html';
}
function redirigir2() {
    window.location.href = 'file:///C:/Users/USUARIO/Desktop/Matiz%20Rosa/ComprarMacetas.html';
}
function redirigirCompra() {
    window.location.href = 'file:///C:/Users/USUARIO/Desktop/Matiz%20Rosa/Principal.html';
}


function validarUsuario() {
    var usernameInput = document.getElementById('login-username');
    var passwordInput = document.getElementById('password');

    var username = usernameInput.value;
    var password = passwordInput.value;

    if (username === 'admin' && password === '12345') {
        window.location.href = 'file:///C:/Users/USUARIO/Desktop/Matiz%20Rosa/Administrador.html';
    } else { 
        alert('Datos Del Administrador Incorrectos');

        username.value = '';
        password.value = '';
    }
  }
  
  function seleccionarImagen(elemento) {
    var imagenes = document.querySelectorAll('.Galeria > .img');
    imagenes.forEach(function (img) {
      img.classList.remove('seleccionada');
    });
    elemento.classList.add('seleccionada');
  }
  
 
  
//BASE DE DATOS

const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configurar conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'matizrosa'
});

db.connect((err) => {
  if (err) {
    console.log('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

// Ruta para obtener datos de la base de datos
app.get('/obtenerDatos', (req, res) => {
  db.query('SELECT * FROM compras', (err, result) => {
    if (err) {
      console.log('Error al obtener datos:', err);
      res.status(500).send('Error al obtener datos de la base de datos');
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

  

window.onload = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/obtenerDatos', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var datos = JSON.parse(xhr.responseText);
        mostrarDatos(datos);
      }
    };
    xhr.send();
  };

  function mostrarDatos(datos) {
    var container = document.getElementById('datosContainer');
    var html = '<ul>';
    datos.forEach(function (dato) {
      html += '<li>' + dato.nombre + ': ' + dato.valor + '</li>';
    });
    html += '</ul>';
    container.innerHTML = html;
  }