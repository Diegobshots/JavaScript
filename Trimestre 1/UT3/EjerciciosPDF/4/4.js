//Elementos

var boton = document.getElementById("boton");

//Eventos

boton.addEventListener("click", fBoton);


//funciones

function fBoton(){
    var alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N"
    ,"Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    var texto = document.getElementById("texto").value;
    sumaTotal = 0;
    texto = texto.toUpperCase();
    var arrayTexto = texto.split("");
    alfabeto.forEach( function(valor, indice, array){
        console.log((indice +", "+valor ));

        for(i=0; i<=arrayTexto.length; i++){
            if(arrayTexto[i]===valor){
                sumaTotal+=indice+1;
            }
        }

    });
    document.getElementById("resultado").value = sumaTotal;
}