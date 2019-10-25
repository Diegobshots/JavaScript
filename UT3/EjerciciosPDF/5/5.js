//Elementos

var botonA = document.getElementById("a");
var botonB = document.getElementById("b");
var botonC = document.getElementById("c");
var botonD = document.getElementById("d");
var botonE = document.getElementById("e");

//Eventos

botonA.addEventListener("click", fBotonA);
botonB.addEventListener("click", fBotonB)
botonC.addEventListener("click", fBotonC)
botonD.addEventListener("click", fBotonD)
botonE.addEventListener("click", fBotonE)

//funciones

var quijote = document.getElementById("quijote").innerHTML;

function fBotonA(){
    arrayQuijote = quijote.split("");
    arrayQuijote[0].toUpperCase();
    for (i=0; i<arrayQuijote.length; i++){
        document.getElementById("quijote").innerHTML += arrayQuijote[i];
    }
    //Esto no funciona ni harto vino
}
function fBotonB(){
    quijote = quijote.toLowerCase();
    document.getElementById("quijote").innerHTML = quijote;
}
function fBotonC(){
    
}
function fBotonD(){
    
}
function fBotonE(){
    
}