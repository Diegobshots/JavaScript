let boton = document.getElementById("botonaco");
let app = {
    contratar: function contratar(){
        document.body.style.backgroundImage = "url('./img/background.gif')";
        boton.style.backgroundColor = "green";
        boton.innerHTML = "¡Contratado!";
        document.getElementById("fotoCV").style.border = "3px solid #00ff0d";
        document.getElementById("fotoCV").style.animation = "rebota 0.3s infinite";
      },
    rellenaCV : function rellena(){
        fetch('cv.json')
        .then(data => data.json())
        .then(users => {
            document.getElementById("fname").value = users.nombre;
            document.getElementById("titulo").innerHTML = users.nombre;
            document.getElementById("lname").value = users.apellidos;
            document.getElementById("email").value = users.correo;
            document.getElementById("telefono").value = users.telefono;
            document.getElementById("idioma1").value = users.idiomas[0].nombre;
            document.getElementById("idioma2").value = users.idiomas[1].nombre;
            document.getElementById("estudio1").value = users.estudios[0].titulo;
            document.getElementById("estudio2").value = users.estudios[1].titulo;
            document.getElementById("centro1").value = users.estudios[0].centro;
            document.getElementById("centro2").value = users.estudios[1].centro;
            document.getElementById("anio1").value = users.estudios[0].anioFin;
            document.getElementById("anio2").value = users.estudios[1].anioFin;
            document.getElementById("fotoCV").src = users.foto;
        });
    }
}

window.onload = app.rellenaCV;
boton.addEventListener("click", app.contratar);