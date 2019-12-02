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


//Creamos el objeto con el que vamos a trabajar
var calculadora ={
    numero1:0,
    numero2:0,
    operador:"",
    sumar : function sumaNumeros(){
        return parseInt(this.numero1)+parseInt(this.numero2);
    },
    restar : function sumaNumeros(){
        return parseInt(this.numero1)-parseInt(this.numero2);
    },
    igual : function resultado(){
        pantallaOper.innerHTML = "";
        calculadora.numero2 = pantalla.innerHTML;
        switch (calculadora.operador){
        case "+":
            pantalla.innerHTML = calculadora.sumar();
            break;
        case "-":
            pantalla.innerHTML = calculadora.restar();
            break;
        }
    },
    botonMenos : function menos(){
        calculadora.numero1 = pantalla.innerHTML;
        pantalla.innerHTML = "";
        pantallaOper.innerHTML = "-";
        calculadora.operador = "-";
    },
    botonMas : function mas(){
        calculadora.numero1 = pantalla.innerHTML;
        pantalla.innerHTML = "";
        pantallaOper.innerHTML = "+";
        calculadora.operador = "+";
    },
    botonCero : function numCero(){pantalla.innerHTML += 0},
    botonUno : function numUno(){pantalla.innerHTML += 1},
    botonDos : function numDos(){pantalla.innerHTML += 2},
    botonTres : function numTres(){pantalla.innerHTML += 3},
    botonCuatro : function numCuatro(){pantalla.innerHTML += 4}
    

};

//Cada boton tiene una funcion que modifica el objeto o llama a un método del objeto 







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



//Eventos click
cuatro.addEventListener("click", calculadora.botonCuatro)
tres.addEventListener("click", calculadora.botonTres)
dos.addEventListener("click", calculadora.botonDos);
uno.addEventListener("click", calculadora.botonUno);
cero.addEventListener("click", calculadora.botonCero);
mas.addEventListener("click", calculadora.botonMas);
menos.addEventListener("click", calculadora.botonMenos);
igual.addEventListener("click", calculadora.igual);