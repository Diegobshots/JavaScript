
cargarDatos(muestraDescripciones());



function muestraDescripciones(){
  
}
function cargarDatos() {
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
    }
    callback();

  }

  //xmlhttp.open("GET","listadoPaises.json?nocache=' + (new Date()).getTime()");
  xmlhttp.open("GET", "cv.json");
  xmlhttp.send();
}