let palabra = document.getElementById("palabra");
let arrayPalabras = ["patata", "caracol", "judia", "pelota",
    "reloj", "funcion", "caballo", "gorra", "ordenador"
];
let posicionAleatoria = Math.floor(Math.random() * arrayPalabras.length);
var palabraComprobada ="";

//objeto juego:
var juego ={
    letra: "",
    solucion:"",
    intentos: 0,
    palabraAdivinar: arrayPalabras[posicionAleatoria],  
    comprobar : function comprueba(){
        
        //tengo que buscar si la letra introducida coincide con la posicion del array letras
        //si coincide se traduce de "_" a su letra original
        //si no coincide, pinta la letra tachada y pinta una imagen
        let letras = this.palabraAdivinar.split("");
        let arraySolucion = this.solucion.split("");
        for(let i=0; i< this.palabraAdivinar.length; i++){
            if (this.letra == letras[i]){
                this.arraySolucion = this.letra;
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
    }
};


//Funcion que he cogido de internet para capturar teclado
juego.pintaHuecos();

window.onload = function() {
    document.onkeypress = mostrarInformacionTecla;
}
function mostrarInformacionTecla(eventoObj){
    var caracter = String.fromCharCode(eventoObj.which);
    juego.letra = caracter;
    juego.comprobar();
    juego.pintaSolucion();
}