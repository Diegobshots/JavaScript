//Aqui capturamos cada uno de los botones
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
let division = document.getElementById("division");
let multiplicacion = document.getElementById("multiplicacion");
let inverso = document.getElementById("inverso");
let coma = document.getElementById("coma");
let opuesto = document.getElementById("opuesto");


//Creamos el objeto con el que vamos a trabajar
var calculadora ={
    numero1: 0,
    numero2: 0,
    numeroAuxiliar: 0,
    operador: "",
    decimal: false, //para controlar si se ha introducido una coma y evitar su repeticion
    sumar : function sumaNumeros(){
        return parseFloat(this.numero1)+parseFloat(this.numero2);
    },
    restar : function sumaNumeros(){
        return parseFloat(this.numero1)-parseFloat(this.numero2);
    },
    dividir : function divideNumeros(){
        return parseFloat(this.numero1)/parseFloat(this.numero2);
    },
    multiplicar : function multiplicaNumeros(){
        return parseFloat(this.numero1)*parseFloat(this.numero2);
    },
    invertir : function invierteNumero(){
        return 1/parseFloat(this.numero1);
    },
    igual : function resultado(){
        pantallaOper.innerHTML = "";
        calculadora.numero2 = pantalla.innerHTML;
        switch (calculadora.operador){
        case "+":
            if(isNaN(calculadora.sumar())){
                pantalla.innerHTML = "ERROR";
            }else{
                pantalla.innerHTML = calculadora.sumar();
            }
            break;
        case "-":
            if(isNaN(calculadora.restar())){
                pantalla.innerHTML = "ERROR";
            }else{
                pantalla.innerHTML = calculadora.restar();
            }
            break;
        case "/":
            if(isNaN(calculadora.dividir())){
                pantalla.innerHTML = "ERROR";
            }else{
                pantalla.innerHTML = calculadora.dividir();
            }
            break;
        case "*":
            pantalla.innerHTML = calculadora.multiplicar();
            break;
        case "1/x":
            pantalla.innerHTML = calculadora.invertir();
            break;
        }
    },
    botonMenos : function menos(){
        calculadora.decimal = false; //esto nos permite meter comas en el segundo numero
        calculadora.numero1 = pantalla.innerHTML;
        pantalla.innerHTML = "";
        pantallaOper.innerHTML = "-";
        calculadora.operador = "-";
    },
    botonMas : function mas(){
        calculadora.decimal = false; 
        calculadora.numero1 = pantalla.innerHTML;
        pantalla.innerHTML = "";
        pantallaOper.innerHTML = "+";
        calculadora.operador = "+";
    },
    botonDivision : function entre(){
        calculadora.decimal = false;
        calculadora.numero1 = pantalla.innerHTML;
        pantalla.innerHTML = "";
        pantallaOper.innerHTML = "÷";
        calculadora.operador = "/";
    },
    botonMultiplicacion : function por(){
        calculadora.decimal = false;
        calculadora.numero1 = pantalla.innerHTML;
        pantalla.innerHTML = "";
        pantallaOper.innerHTML = "X";
        calculadora.operador = "*";
    },
    botonInverso : function invertido(){
        calculadora.decimal = true; //impedimos que meta comas porque el resultado siempre es decimal
        calculadora.numero1 = pantalla.innerHTML;
        pantallaOper.innerHTML = "1/"+calculadora.numero1;
        calculadora.operador = "1/x";
    },
    botonComa : function numComa(){
        if(calculadora.decimal == false){ //aqui controlo que solo se pueda introducir una coma
            pantalla.innerHTML += ".";
            calculadora.decimal = true;
        }
    },
    botonOpuesto : function numOpuesto(){
        calculadora.numeroAuxiliar = pantalla.innerHTML;
        calculadora.numeroAuxiliar *= -1;
        pantalla.innerHTML = calculadora.numeroAuxiliar;
    },
    botonCero : function numCero(){pantalla.innerHTML += 0},
    botonUno : function numUno(){pantalla.innerHTML += 1},
    botonDos : function numDos(){pantalla.innerHTML += 2},
    botonTres : function numTres(){pantalla.innerHTML += 3},
    botonCuatro : function numCuatro(){pantalla.innerHTML += 4},
    botonCinco : function numCinco(){pantalla.innerHTML += 5},
    botonSeis : function numSeis(){pantalla.innerHTML += 6},
    botonSiete : function numSiete(){pantalla.innerHTML += 7},
    botonOcho : function numOcho(){pantalla.innerHTML += 8},
    botonNueve : function numNueve(){pantalla.innerHTML += 9}
};

//Eventos click para numeros
nueve.addEventListener("click", calculadora.botonNueve);
ocho.addEventListener("click", calculadora.botonOcho);
siete.addEventListener("click", calculadora.botonSiete);
seis.addEventListener("click", calculadora.botonSeis);
cinco.addEventListener("click", calculadora.botonCinco);
cuatro.addEventListener("click", calculadora.botonCuatro)
tres.addEventListener("click", calculadora.botonTres)
dos.addEventListener("click", calculadora.botonDos);
uno.addEventListener("click", calculadora.botonUno);
cero.addEventListener("click", calculadora.botonCero);

//Eventos click para operadores
mas.addEventListener("click", calculadora.botonMas);
menos.addEventListener("click", calculadora.botonMenos);
igual.addEventListener("click", calculadora.igual);
division.addEventListener("click", calculadora.botonDivision);
multiplicacion.addEventListener("click", calculadora.botonMultiplicacion);
inverso.addEventListener("click", calculadora.botonInverso);
coma.addEventListener("click", calculadora.botonComa);
opuesto.addEventListener("click", calculadora.botonOpuesto)

