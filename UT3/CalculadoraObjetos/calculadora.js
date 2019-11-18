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

var calculadora ={
    numero1:0,
    numero2:0,
    sumar : function sumaNumeros(){
        return this.numero1+this.numero2;
    }
};
calculadora.numero1= 9;
calculadora.numero2= 1;

console.log(calculadora.sumar());
let fBotonUno = () => pantalla.innerHTML += 5;
uno.addEventListener("click", fBotonUno);

let fBotonDos = () => pantalla.innerHTML += 2;
uno.addEventListener("click", fBotonDos);

let fBotonMas = () => num1 = num1;
uno.addEventListener("click", fBotonUno);