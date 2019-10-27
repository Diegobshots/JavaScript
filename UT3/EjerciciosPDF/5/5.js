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

    arrayQuijote[0] = arrayQuijote[0].toLocaleUpperCase();
    var tipoOracion=arrayQuijote[0];
    for (i=1; i<arrayQuijote.length; i++){
        tipoOracion += arrayQuijote[i].toLowerCase();
    }
    document.getElementById("quijote").innerHTML = tipoOracion;
    
}
function fBotonB(){
    quijote = quijote.toLowerCase();
    document.getElementById("quijote").innerHTML = quijote;
}
function fBotonC(){
    arrayQuijote = quijote.split("");
    var tipoMayusculas="";
    for (i=0; i<arrayQuijote.length; i++){
        tipoMayusculas += arrayQuijote[i].toLocaleUpperCase();
    }
    document.getElementById("quijote").innerHTML = tipoMayusculas;
}
function fBotonD(){
    arrayQuijote = quijote.split("");
    arrayQuijote[0] = arrayQuijote[0].toLocaleUpperCase();
    var tipoPrimMayus=arrayQuijote[0];
    for (i=1; i<arrayQuijote.length; i++){
        if(arrayQuijote[i]=== " "){
            tipoPrimMayus += " ";
            tipoPrimMayus += arrayQuijote[i+1].toLocaleUpperCase();
        }else{
            tipoPrimMayus += arrayQuijote[i];
        }
    }
    document.getElementById("quijote").innerHTML = tipoPrimMayus;
}
function fBotonE(){
    
}