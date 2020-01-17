var boton = document.getElementById("verResumen");
var cajaTexto = document.getElementById("cajaTexto");


boton.addEventListener("click", fBoton);


function fBoton(){
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;

    //Escribimos en la caja de texto los valores recibidos

    cajaTexto.innerHTML += "<input type='text' id='nombre' readonly='readonly' placeholder='"+nombre+"'><br>";
    cajaTexto.innerHTML += "<input type='text' id='nombre' readonly='readonly' placeholder='"+apellidos+"'><br>";
    cajaTexto.innerHTML += "<input type='text' id='nombre' readonly='readonly' placeholder='"+telefono+"'><br>";
    cajaTexto.innerHTML += "<input type='text' id='nombre' readonly='readonly' placeholder='"+direccion+"'><br>";

}

