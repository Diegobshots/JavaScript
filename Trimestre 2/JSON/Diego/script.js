var btn = document.getElementById("botonaco");

var app = {
  conexion: function cenexion() {

    // Obtener la instancia del objeto XMLHttpRequest
    xmlhttp = new XMLHttpRequest();


    // Preparar la funcion de respuesta
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var jsonResponse = xmlhttp.responseText;
        var objeto_json = JSON.parse(jsonResponse);

        document.getElementById("fname").value = objeto_json.nombre;
        document.getElementById("lname").value = objeto_json.apellidos;
        document.getElementById("email").value = objeto_json.correo;
        document.getElementById("telefono").value = objeto_json.telefono;
        document.getElementById("idioma1").value = objeto_json.idiomas[0].nombre;
        document.getElementById("idioma2").value = objeto_json.idiomas[1].nombre;
        document.getElementById("estudio1").value = objeto_json.estudios[0].titulo;
        document.getElementById("estudio2").value = objeto_json.estudios[1].titulo;
        document.getElementById("centro1").value = objeto_json.estudios[0].centro;
        document.getElementById("centro2").value = objeto_json.estudios[1].centro;
        document.getElementById("anio1").value = objeto_json.estudios[0].anioFin;
        document.getElementById("anio2").value = objeto_json.estudios[1].anioFin;


      }

    }

    xmlhttp.open("GET", "cv.json", true);
    xmlhttp.send();
  }

}

window.onload = app.conexion;