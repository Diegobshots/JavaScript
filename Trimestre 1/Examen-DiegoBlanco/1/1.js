var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r"];
// Capturamos boton
var boton = document.getElementById("botonRellenar");
var tabla = document.getElementById("tabla");
var contadorLetras = 0; //sera nuestra posicion del array letras
// Añadimos evento

boton.addEventListener("click", fBoton);

//Esta funcion pinta una tabla con letras distinguiendo si la linea es impar o par
//funcion
var tablaPintada = "";
function fBoton(){
    tablaPintada += "<table>";

    for ( i = 1 ; i < 7 ; i++){
        tablaPintada += "<tr>";
        for( b = 1 ; b < 4 ; b++){
            if (i%2!=0){ //comprueba si la fila que esta pintando es par o impar
                tablaPintada += "<td>"+letras[contadorLetras]+"</td><td>-</td>";
                contadorLetras++; //incrementa la posicion del array letras

            }else{
                tablaPintada += "<td>-</td><td>"+letras[contadorLetras]+"</td>";
                contadorLetras++; //incrementa la posicion del array letras

            }
        }
        tablaPintada += "</tr>";
    }
    tablaPintada += "</table>";

    tabla.innerHTML = tablaPintada;
}


