//Aqui captamos cada uno de los botones
let pantalla = document.getElementById("pantalla");
let pantallaOper = document.getElementById("pantallaOper");
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
let operador = "";

//Creamos el objeto con el que vamos a trabajar
var calculadora ={
    numero1:0,
    numero2:0,
    sumar : function sumaNumeros(){
        return parseInt(this.numero1)+parseInt(this.numero2);
    },
    restar : function sumaNumeros(){
        
        return parseInt(this.numero1)-parseInt(this.numero2);
    }
};

//Cada boton tiene una funcion que modifica el objeto o llama a un método del objeto 
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

let fBotonMas = () =>{
    calculadora.numero1 = pantalla.innerHTML;
    pantalla.innerHTML = "";
    pantallaOper.innerHTML = "+";
    operador = "+";
} 
mas.addEventListener("click", fBotonMas);

let fBotonMenos = () =>{
    calculadora.numero1 = pantalla.innerHTML;
    pantalla.innerHTML = "";
    pantallaOper.innerHTML = "-";
    operador = "-";
    
} 
menos.addEventListener("click", fBotonMenos);

let fBotonIgual = () =>{
    pantallaOper.innerHTML = "";
    calculadora.numero2 = pantalla.innerHTML;
    switch (operador){
        case "+":
            pantalla.innerHTML = calculadora.sumar();
            break;
        case "-":
            pantalla.innerHTML = calculadora.restar();
            break;
    }
} 
igual.addEventListener("click", fBotonIgual);