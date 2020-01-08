//Elementos

var boton = document.getElementById("boton");

//Eventos

boton.addEventListener("click", fBoton);


//funciones

function fBoton(){
    var texto = document.getElementById("texto").value;
   // texto = texto.toLowerCase();
    var vocales = ['a', 'e', 'i', 'o', 'u'];
    var consonantes = ['q', 'w', 'r', 't', 'y', 'p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
    cantVocales= 0;
    cantConsonantes=0;
    arrayTexto = texto.split("");
    for ( let i=0 ; i < arrayTexto.length ; i++){
        for(let b=0 ; b<vocales.length; b++){
            if (arrayTexto[i] === vocales[b]){
                cantVocales++;
            }
        }
    }
    for ( let c=0 ; c < arrayTexto.length ; c++){
        for(let g=0 ; g<consonantes.length; g++){
            if (arrayTexto[c] === consonantes[g]){
                cantConsonantes++;
            }
        }
    }
    document.getElementById("vocales").value = cantVocales;
    document.getElementById("consonantes").value = cantConsonantes;

}