//Elementos

var boton = document.getElementById("boton");

//Eventos

boton.addEventListener("click", fBoton);


//funciones

function fBoton(){
    var texto = document.getElementById("texto").value;
    texto = texto.toLowerCase();
    arrayTexto = texto.split("");
    var quijote = document.getElementById("quijote").innerText;
    quijote = quijote.toLowerCase();
    arrayQuijote = quijote.split("");
    apariciones = 0;
    for (let i=0; i<arrayQuijote.length ; i++){
        if (arrayTexto[0] === arrayQuijote[i]){
            apariciones++;
        }
    }
    document.getElementById("apariciones").value = apariciones;
}