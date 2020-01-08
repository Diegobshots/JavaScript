//botones
var botonA = document.getElementById("botonA");
var botonC = document.getElementById("botonC");

//eventos
botonA.addEventListener("click", fBotonA);
botonC.addEventListener("click", fBotonC);

//funciones

function fBotonA(){
    window.open("ejercicioA.html", "ventana", "width=300px, height=300px");
}

function fBotonC(){
    window.open("ejercicioB.html", "ventana", "width=100px, height=100px");

}