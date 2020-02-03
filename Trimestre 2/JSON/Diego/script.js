var botonEnviar = document.getElementById("botonEnviar");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var correo = document.getElementById("correo");
var container = document.getElementById("container");

botonEnviar.addEventListener("click", fBoton);

function fBoton(){
    var json = "";
    json += nombre.value;
    console.log(json);
}