var formulario = document.getElementById("miFormulario");
var boton = document.getElementById("ver");

boton.addEventListener("click", fBoton);


function fBoton(){
    array.forEach(formulario => {
        console.log(formulario);
    });
}
