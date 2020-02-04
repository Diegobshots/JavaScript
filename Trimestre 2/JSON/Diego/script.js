


  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var respuesta = JSON.parse(xhttp.responseText);
      var cv = respuesta.cv;
      var salida = '';
      console.log(cv.nombre);
    }
  };
  xhttp.open("GET", "cv.json", true);
  xhttp.send();