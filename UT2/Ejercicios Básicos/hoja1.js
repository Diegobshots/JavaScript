//Botones
var boton1 = document.getElementById("ejercicio3");
var boton2 = document.getElementById("ejercicio4");
var boton4 = document.getElementById("ejercicio5");


//Eventos
boton1.addEventListener("click", fEjercicio3);
boton2.addEventListener("click", fEjercicio4);
boton4.addEventListener("click", fEjercicio5);

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

function fEjercicio5() {
    var dni = 0;
    while(dni >=0 && dni<=999999999){
        dni = prompt("Introduce tu DNI sin letra: ");
        if(isNaN(dni)){
            alert("Introduce solo numeros");
        }else{
            parseInt(dni);
            resto = dni%23;
            switch(resto){
                case 0:
                    alert("Letra: T");
                    break;
                case 1:
                    alert("Letra: R");
                    break;
                case 2:
                    alert("Letra: W");
                    break;
                case 3:
                    alert("Letra: A");
                    break;
                case 4:
                    alert("Letra: G");
                    break;
                case 5:
                    alert("Letra: M");
                    break;
                case 6:
                    alert("Letra: Y");
                    break;
                //Y ya paro porque esto se puede hacer con un array y me aburro hehe
            }
        }
    }
}
