var formulario = document.getElementById("nombre").value;
var boton = document.getElementById("verResumen");

boton.addEventListener("click", fBoton);


function fBoton(){
    array.forEach(formulario => {
        console.log(formulario);
    });
}
