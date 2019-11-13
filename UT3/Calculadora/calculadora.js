let pantalla = document.getElementById("pantalla");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let cero = document.getElementById("cero");
let igual = document.getElementById("igual");
let mas = document.getElementById("mas");
let menos = document.getElementById("menos");
let reset = document.getElementById("reset");


let fBotonUno = () => pantalla.innerHTML += 1;
uno.addEventListener("click", fBotonUno);

let fBotonDos = () => pantalla.innerHTML += 2;
dos.addEventListener("click", fBotonDos);

let fBotonTres = () => pantalla.innerHTML += 3;
tres.addEventListener("click", fBotonTres);

let fBotonCuatro = () => pantalla.innerHTML += 4;
cuatro.addEventListener("click", fBotonCuatro);

let fBotonCinco = () => pantalla.innerHTML += 5;
cinco.addEventListener("click", fBotonCinco);

let fBotonSeis = () => pantalla.innerHTML += 6;
seis.addEventListener("click", fBotonSeis);

let fBotonSiete = () => pantalla.innerHTML += 7;
siete.addEventListener("click", fBotonSiete);

let fBotonOcho = () => pantalla.innerHTML += 8;
ocho.addEventListener("click", fBotonOcho);

let fBotonNueve = () => pantalla.innerHTML += 9;
nueve.addEventListener("click", fBotonNueve);

let fBotonCero = () => pantalla.innerHTML += 0;
cero.addEventListener("click", fBotonCero);

let fBotonIgual = () => {
    let operacion = pantalla.innerHTML;
    resultado = calcular(operacion);
    pantalla.innerHTML = resultado;
};
igual.addEventListener("click", fBotonIgual);

let fBotonMas = () => pantalla.innerHTML += "+";
mas.addEventListener("click", fBotonMas);

let fBotonMenos = () => pantalla.innerHTML += "-";
menos.addEventListener("click", fBotonMenos);

let fBotonReset = () => {
    pantalla.innerHTML = "";
};
reset.addEventListener("click", fBotonReset);


function calcular(cadena){
    var total= 0, cadena= cadena.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while(cadena.length){
        total+= parseFloat(cadena.shift());
    }
    return total;
}



