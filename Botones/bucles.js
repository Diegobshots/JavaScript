//Asignacion de elementos DOM
var botonFor = document.getElementById("botonFor");
var botonWhile = document.getElementById("botonWhile");
var botonDoWhile = document.getElementById("botonDoWhile");
var botonCalcularMedia = document.getElementById("botonCalcularMedia");
var botonCalcularMediaV3 = document.getElementById("botonCalcularMediaV3");

//Eventos
botonFor.addEventListener("click", fBucleFor);
botonWhile.addEventListener("click", fBucleWhile);
botonDoWhile.addEventListener("click", fBucleDoWhile);
botonCalcularMedia.addEventListener("click", fCalcularMedia);
botonCalcularMediaV3.addEventListener("click", fCalcularMediaV3);

//Funciones
function fBucleFor(){
    for (var i=1; i<11; i++){
        console.log(i);  
    }
}
function fBucleWhile(){
    var x=1;
    while(x<11){
        console.log(x);
        x++;
    }
}

function fBucleDoWhile(){
    var y=1;
    do{
        console.log(y);
        y++;
    }while(y<11);
}

function fCalcularMedia(){
    var total=0;
    cadenaErrores="";
    for (var i=1; i<11; i++){
        
        var numero = prompt("Introduce el numero "+i);
        if (isNaN(numero) || numero===" "){
            if (numero ===" "){
                cadenaErrores += "en posicion "+i +" introduciste un espacio, " ;
            }else{
                cadenaErrores += "en posicion "+i +" introduciste: "+numero+", " ;
            }
        }else{
            total += parseInt(numero);
        }
    }
    
    media = numero/10;
    if (cadenaErrores.length > 1){
        alert("Error: "+cadenaErrores);
    }else{
        alert("La media es: "+media);
    }
    
}

function fCalcularMediaV3(){
    var total=0;
    cadenaErrores="";
    for (var i=1; i<11; i++){
        
        var numero = prompt("Introduce 10 numeros separados por \";\" :");
        if (isNaN(numero) || numero===" "){
            if (numero ===" "){
                cadenaErrores += "en posicion "+i +" introduciste un espacio, " ;
            }else{
                cadenaErrores += "en posicion "+i +" introduciste: "+numero+", " ;
            }
        }else{
            total += parseInt(numero);
        }
    }
    
    media = numero/10;
    if (cadenaErrores.length > 1){
        alert("Error: "+cadenaErrores);
    }else{
        alert("La media es: "+media);
    }
    
}
