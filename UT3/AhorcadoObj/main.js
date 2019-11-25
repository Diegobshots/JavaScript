//Inicializacion de las variables

let palabra = document.getElementById("palabra");
let letrasFallidas = document.getElementById("letrasFallidas");
let ahorcado = document.getElementById("ahorcado");
let arrayPalabras = ["patata", "caracol", "judia", "pelota",
    "reloj", "funcion", "caballo", "gorra", "ordenador", "lingote"
];
let posicionAleatoria = Math.floor(Math.random() * arrayPalabras.length);

//objeto juego:
var juego ={
    letra: "",
    letraMal: "",
    solucion: "",
    fallo: "", //booleano que detecta si la letra introducida fue un fallo se inicializa en la funciona true, es decir, se presupone un fallo
    intentos: 0,
    palabraAdivinar: arrayPalabras[posicionAleatoria],  
    comprobar : function comprueba(){
        
        //tengo que buscar si la letra introducida coincide con la posicion del array letras
        //si coincide se traduce de "_" a su letra original
        //si no coincide, pinta la letra tachada y pinta una imagen
        this.fallo = true; //presuponemos que ha fallado de entrada
        let letras = this.palabraAdivinar.split("");
        let arraySolucion = this.solucion.split("");
        let palabraComprobada ="";
        this.letraMal = this.letra;
        for(let i=0; i< this.palabraAdivinar.length; i++){
            if (this.letra == letras[i]){
                arraySolucion[i] = this.letra;
                this.letraMal ="";
                this.fallo = false; //con una sola ocurrencia entendemos que no ha fallado
            }
            palabraComprobada += arraySolucion[i]
        }
        this.solucion = palabraComprobada;
        if(this.fallo){
            this.intentos++; //cada vez que el usuario haya fallado le sumamamos un intento
        }

    },
    pintaHuecos : function pintarHuecos(){
        
        for(let i=0; i< this.palabraAdivinar.length; i++){
            this.solucion += "_";
        };
    },
    pintaSolucion : function pintarSolucion(){
        palabra.innerHTML = this.solucion;
    },
    pintaFallos : function pintarFallos(){
        letrasFallidas.innerHTML += this.letraMal;
    },
    pintaAhorcado : function pintarAhorcado(){
        ahorcado.innerHTML = `<img src='img/${this.intentos}.png' alt='ahorcado'>`;
    },
    juega :function jugar(eventoObj){
        var caracter = String.fromCharCode(eventoObj.which);
        juego.letra = caracter;
        juego.comprobar();
        juego.pintaAhorcado();
        juego.pintaSolucion();
        juego.pintaFallos();
    }
};


//******************* */
//Inicio del programa
//******************* */
juego.pintaHuecos();
juego.pintaSolucion();
juego.pintaAhorcado();
window.onload = function() {
    document.onkeypress = juego.juega;
}



