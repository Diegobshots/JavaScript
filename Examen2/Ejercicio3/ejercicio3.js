//obtenemos el div en el que vamos a escribir
let ejercicio3 = document.getElementById("ejercicio3");

//Creamos el objeto de nuestra aplicacion
//por algun motivo no me funciona pero te dejo mi propuesta aqui

let aplicacion = {
    frase: [],
    posicion: 0,
    pintaDatos() {
        aplicacion.frase.push("E")
        aplicacion.frase.push("X")
        //aqui seguiria metiendo las letras de la frase al array
        document.write(aplicacion.frase[aplicacion.posicion]);
        aplicacion.posicion++;
    },
    retardo() {
        setTimeout(function () {
            aplicacion.pintaDatos;
        }, 2000)
    },
    async run() {
        primero = await aplicacion.retardo;
        segundo = await aplicacion.retardo;
        tercero = await aplicacion.retardo;
    }
}


    window.onload = aplicacion.run;

