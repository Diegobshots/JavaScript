//Inicializacion de las variables

let palabra = document.getElementById("palabra");
let letrasFallidas = document.getElementById("letrasFallidas");
let ahorcado = document.getElementById("ahorcado");
let arrayPalabras = ["patata", "caracol", "judia", "pelota",
    "reloj", "funcion", "caballo", "gorra", "ordenador", "lingote"
];
let posicionAleatoria = Math.floor(Math.random() * arrayPalabras.length);
let fallo = document.getElementById("fallo");
let acierto = document.getElementById("acierto");
let instrucciones = document.getElementById("instrucciones");

//objeto juego:
var juego ={
    letra: "", 
    letraMal: "",
    solucion: "", //inicialmente se rellena de _ y va completandose con letras
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
            this.intentos++; //cada vez que el usuario haya fallado le sumamos un intento
        }

    },
    pintaHuecos : function pintarHuecos(){ //compara la palabra y rellena solucion con tantas _ como procedan
        
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
        if(this.intentos <= 6){
            ahorcado.innerHTML = `<img src='img/${this.intentos}.png' alt='ahorcado'>`;
        }else{
            ahorcado.innerHTML = `<img src='img/6.png' alt='ahorcado'>`;
        }
    },
    acaba : function acabar(){ //Comprueba si ha acabado
        //gestiona si el usuario ha ganado o ha perdido mirando os intentos o si la palabra está resuelta
        
        switch(this.intentos){
            case 6:
                fallo.innerHTML = "HAS PERDIDO";
                instrucciones.innerHTML = "(Pulsa cualquier tecla para continuar)";
                this.intentos = 7;
                break;
            case 7, 8:
                location.reload();
                break;
            default:
                if(this.palabraAdivinar == this.solucion){
                    acierto.innerHTML = "HAS GANADO";
                    instrucciones.innerHTML = "(Pulsa cualquier tecla para continuar)";
                    this.intentos=7;
                    ahorcado.innerHTML = `<img src='img/ganado.png' alt='ahorcado'>`;
                }
                break;
        }
    },
    juega : function jugar(eventoObj){ //indice de comportamiento del juego
        
            var caracter = String.fromCharCode(eventoObj.which);
            juego.letra = caracter;
            juego.comprobar();
            juego.pintaAhorcado();
            juego.pintaSolucion();
            juego.pintaFallos();
            juego.acaba();
    }
};


//******************* */
//Inicio del programa //
//******************* */
juego.pintaHuecos();
juego.pintaSolucion();
juego.pintaAhorcado();

window.onload = function() {
     document.onkeypress = juego.juega;
}








