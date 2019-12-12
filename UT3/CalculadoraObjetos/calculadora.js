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
let resetMemoria = document.getElementById("resetMemoria");
let division = document.getElementById("division");
let multiplicacion = document.getElementById("multiplicacion");
let inverso = document.getElementById("inverso");
let coma = document.getElementById("coma");
let opuesto = document.getElementById("opuesto");
let borrar = document.getElementById("borrar");
let cuadrado = document.getElementById("cuadrado");
let raiz = document.getElementById("raiz");
let reset = document.getElementById("reset");
let seno = document.getElementById("seno");
let coseno = document.getElementById("coseno");
let tangente = document.getElementById("tangente");
let cubo = document.getElementById("cubo");
let potencia = document.getElementById("potencia");

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
    elevarCuadrado : function elevaCuadrado(){
        return parseFloat(Math.pow(this.numero1, 2));
    },
    raiz : function calculaRaiz(){
        return parseFloat(Math.sqrt(this.numero1));
    },
    seno : function calculaSeno(){
        return parseFloat(Math.sin(this.numero1));
    },
    coseno : function calculaCoseno(){
        return parseFloat(Math.cos(this.numero1));
    },
    tangente : function calculaTangente(){
        return parseFloat(Math.tan(this.numero1));
    },
    elevarCubo : function elevaCubo(){
        return parseFloat(Math.pow(this.numero1, 3));
    },
    elevarPotencia : function elevaPotencia(){
        return parseFloat(Math.pow(this.numero1, this.numero2));
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
        case "^2":
            pantalla.innerHTML = calculadora.elevarCuadrado();
            break;
        case "raiz":
            pantalla.innerHTML = calculadora.raiz();
            break;
        case "sin":
            pantalla.innerHTML = calculadora.seno();
            break;
        case "cos":
            pantalla.innerHTML = calculadora.coseno();
            break;
        case "tan":
            pantalla.innerHTML = calculadora.tangente();
            break;
        case "^3":
            pantalla.innerHTML = calculadora.elevarCubo();
            break;
        case "^":
            pantalla.innerHTML = calculadora.elevarPotencia();
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
    botonBorrar : function borraNum(){
        numeroAnterior = pantalla.innerHTML;
        arrayNumeroanterior = numeroAnterior.split('');
        numeroNuevo = "";
        if(arrayNumeroanterior.pop() == "."){
            calculadora.decimal = false;
        }
        for (i=0 ; i< arrayNumeroanterior.length; i++){
            numeroNuevo += arrayNumeroanterior[i];
        }
        pantalla.innerHTML = numeroNuevo;
    },
    botonCuadrado : function numCuadrado(){
        calculadora.decimal = false;
        calculadora.numero1 = pantalla.innerHTML;
        pantallaOper.innerHTML = calculadora.numero1+"^2";
        calculadora.operador="^2";
    },
    botonRaiz : function numRaiz(){
        calculadora.numero1 = pantalla.innerHTML;
        pantallaOper.innerHTML = "√"+calculadora.numero1;
        calculadora.operador="raiz";
    },
    botonReset : function resetNum(){
        calculadora.decimal = false;
        pantalla.innerHTML = "";
    },
    botonSeno : function sinNum(){
        calculadora.decimal = true;
        calculadora.numero1 = pantalla.innerHTML;
        pantalla.innerHTML = "";
        pantallaOper.innerHTML = "sin("+calculadora.numero1+")";
        calculadora.operador = "sin";
    },
    botonCoseno : function cosNum(){
        calculadora.decimal = true;
        calculadora.numero1 = pantalla.innerHTML;
        pantalla.innerHTML = "";
        pantallaOper.innerHTML = "cos("+calculadora.numero1+")";
        calculadora.operador = "cos";
    },
    botonTangente : function tanNum(){
        calculadora.decimal = true;
        calculadora.numero1 = pantalla.innerHTML;
        pantalla.innerHTML = "";
        pantallaOper.innerHTML = "tan("+calculadora.numero1+")";
        calculadora.operador = "tan";
    },
    botonCubo : function numCubo(){
        calculadora.decimal = false;
        calculadora.numero1 = pantalla.innerHTML;
        pantallaOper.innerHTML = calculadora.numero1+"^3";
        calculadora.operador="^3";
    },
    botonPotencia : function numPotencia(){
        calculadora.decimal = false; //esto nos permite meter comas en el segundo numero
        calculadora.numero1 = pantalla.innerHTML;
        pantalla.innerHTML = "";
        pantallaOper.innerHTML = calculadora.numero1+"ⁿ";
        calculadora.operador = "^";
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
opuesto.addEventListener("click", calculadora.botonOpuesto);
borrar.addEventListener("click", calculadora.botonBorrar);
cuadrado.addEventListener("click", calculadora.botonCuadrado);
raiz.addEventListener("click", calculadora.botonRaiz);
reset.addEventListener("click", calculadora.botonReset);
resetMemoria.addEventListener("click", calculadora.botonReset);
seno.addEventListener("click", calculadora.botonSeno);
coseno.addEventListener("click", calculadora.botonCoseno);
tangente.addEventListener("click", calculadora.botonTangente);
cubo.addEventListener("click", calculadora.botonCubo);
potencia.addEventListener("click", calculadora.botonPotencia);

