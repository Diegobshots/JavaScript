var botonArrancar = document.getElementById("arrancar");
var botonAcelerar = document.getElementById("acelerar");
var botonFrenar = document.getElementById("frenar");
var botonApagar = document.getElementById("apagar");

//objeto coche

var coche ={
    encendido: 0, //encendido es 1 y apagado es 0
    incidencia: 0,
    velocidad: 0,
    arrancar : function arranca(){
        if(coche.encendido == 0){
            coche.encendido = 1;
            coche.incidencia = 0;
            console.log("Arrancado");
        }
    },
    acelerar : function acelera(){
        if(coche.encendido == 1){
            coche.velocidad += 10;
            console.log(coche.velocidad+" km/h");
            if(coche.velocidad > 120){
                if(coche.incidencia != 1){ //si no ha recibido aun una multa por velocidad, se le multa y se apaga
                    console.log("Multa");
                    console.log("Apagado");
                    coche.incidencia = 1; 
                    coche.encendido = 0; //se apaga el coche
                    coche.velocidad = 0;
                }
            }
        }
    },
    frenar : function frena(){
        if (coche.encendido == 1){
            if(coche.velocidad > 10){
                coche.velocidad -= 10;
                console.log(coche.velocidad+" km/h");
            }else{
                if(coche.incidencia != 1){
                    console.log("Grua");
                    console.log("Apagado");
                    coche.incidencia = 1;
                    coche.encendido = 0; //se apaga el coche
                    coche.velocidad = 0;

                }
            }
            
        }
    },
    apagar : function apaga(){
        if(coche.encendido == 1 ){ //solo se puede apagar si esta encendido
            coche.encendido = 0;
            console.log("Coche apagado");
            coche.velocidad = 0;

        }
    }

}

//eventos

botonArrancar.addEventListener("click", coche.arrancar);
botonAcelerar.addEventListener("click", coche.acelerar);
botonFrenar.addEventListener("click", coche.frenar);
botonApagar.addEventListener("click", coche.apagar);