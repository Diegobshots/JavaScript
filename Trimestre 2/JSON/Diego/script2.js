let boton = document.getElementById("botonaco");
let app = {
    contratar: function contratar() {
        document.body.style.backgroundImage = "url('./img/background.gif')";
        boton.style.backgroundColor = "green";
        boton.innerHTML = "¡Contratado!";
        document.getElementById("fotoCV").style.border = "3px solid #00ff0d";
        document.getElementById("fotoCV").style.animation = "rebota 0.3s infinite";
    },
    rellenaCV: function rellena() {
        fetch('cv.json')
            .then(data => data.json())
            .then(contenidoJson => {
                //Cargamos datos personales
                document.getElementById("fotoCV").src = contenidoJson.datosPersonales[0].foto;
                document.getElementById("fname").value = contenidoJson.datosPersonales[1].nombre;
                document.getElementById("titulo").innerHTML = contenidoJson.datosPersonales[1].nombre;
                document.getElementById("lname").value = contenidoJson.datosPersonales[2].apellidos;
                document.getElementById("email").value = contenidoJson.datosPersonales[3].correo;
                document.getElementById("telefono").value = contenidoJson.datosPersonales[4].telefono;
                return contenidoJson;
            })
            .then(contenidoJson => {
                //Cargamos idiomas
                document.getElementById("idioma1").value = contenidoJson.idiomas[0].nombre;
                document.getElementById("idioma2").value = contenidoJson.idiomas[1].nombre;
                return contenidoJson;
            })
            .then(contenidoJson => {
                //Cargamos estudios
                document.getElementById("estudio1").value = contenidoJson.estudios[0].titulo;
                document.getElementById("estudio2").value = contenidoJson.estudios[1].titulo;
                document.getElementById("centro1").value = contenidoJson.estudios[0].centro;
                document.getElementById("centro2").value = contenidoJson.estudios[1].centro;
                document.getElementById("anio1").value = contenidoJson.estudios[0].anioFin;
                document.getElementById("anio2").value = contenidoJson.estudios[1].anioFin;
            });
    }
}

window.onload = app.rellenaCV;
boton.addEventListener("click", app.contratar);