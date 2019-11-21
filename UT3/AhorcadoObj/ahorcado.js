let palabra = document.getElementById("palabra");
let letrasFallidas = document.getElementById("letrasFallidas");
let arrayPalabras = ["patata", "caracol", "judia", "pelota",
    "reloj", "funcion", "caballo", "gorra", "ordenador", "lingote"
];
let posicionAleatoria = Math.floor(Math.random() * arrayPalabras.length);

//objeto juego:
var juego ={
    letra: "",
    letraMal: "",
    solucion:"",
    intentos: 0,
    palabraAdivinar: arrayPalabras[posicionAleatoria],  
    comprobar : function comprueba(){
        
        //tengo que buscar si la letra introducida coincide con la posicion del array letras
        //si coincide se traduce de "_" a su letra original
        //si no coincide, pinta la letra tachada y pinta una imagen
        let letras = this.palabraAdivinar.split("");
        let arraySolucion = this.solucion.split("");
        let palabraComprobada ="";
        this.letraMal = this.letra;
        for(let i=0; i< this.palabraAdivinar.length; i++){
            if (this.letra == letras[i]){
                arraySolucion[i] = this.letra;
                this.letraMal ="";
            }
            palabraComprobada += arraySolucion[i]
        }
        this.solucion = palabraComprobada;

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
    }
};


juego.pintaHuecos();
juego.pintaSolucion();

//Funcion que he cogido de internet para capturar teclado
window.onload = function() {
    document.onkeypress = jugar;
}
function jugar(eventoObj){
    var caracter = String.fromCharCode(eventoObj.which);
    juego.letra = caracter;
    juego.comprobar();
    juego.pintaSolucion();
    juego.pintaFallos();
}