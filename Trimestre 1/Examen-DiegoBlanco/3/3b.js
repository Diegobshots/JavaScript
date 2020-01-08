//botones

var bCalcularSuma = document.getElementById("calcularSuma");

//div resultado

var resultado = document.getElementById("resultado");

//eventos

bCalcularSuma.addEventListener("click", fCalculoSuma);


//funciones
var suma = 0;

function fCalculoSuma(){
    //esta funcion distingue numeros entre "," los mete en un array y calcula la suma total
    var numeros = document.getElementById("numeros").value;
    arrayNumeros = numeros.split(',');
    for(i=0 ; i<arrayNumeros.length ; i++){
        suma += parseInt(arrayNumeros[i]);
    }
    resultado.innerHTML = "Resultado: "+suma;
}