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
    arrayQuijote = quijote.split("");
    apariciones = 0;
    for (let i; i<arrayQuijote.lenght ; i++){
        if (arrayTexto[0] === arrayQuijote[i]){
            apariciones++;
        }
    }
    document.getElementById("apariciones").value = apariciones;
}