//Botones
var boton1 = document.getElementById("ejercicio3");
var boton2 = document.getElementById("ejercicio4");


//Eventos
boton1.addEventListener("click", fEjercicio3);
boton2.addEventListener("click", fEjercicio4);


//Funciones
function fEjercicio3() {
    var cadenaCompilada = "";
    var cadena = "";
    while(cadena!="C"){
        cadena = prompt("Introduce texto (C para finalizar): ");
        if (cadena != "C"){
            cadenaCompilada += cadena + " - ";
        }
    }
    alert(cadenaCompilada);
}

function fEjercicio4() {
    var numeroSumado=0;
    var numero = "";
    while(numero != "C"){
        numero = prompt("Introduce un numero: ")
        
        if (isNaN(numero)){
            alert("Introduce solo numeros: ");
        }else{
            numeroSumado += parseInt(numero);
        }
    }
    alert("El total de numeros es: "+numeroSumado);
}