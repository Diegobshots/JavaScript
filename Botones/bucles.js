//Asignacion de elementos DOM
var botonFor = document.getElementById("botonFor");
var botonWhile = document.getElementById("botonWhile");
var botonDoWhile = document.getElementById("botonDoWhile");
var botonCalcularMedia = document.getElementById("botonCalcularMedia");

//Eventos
botonFor.addEventListener("click", fBucleFor);
botonWhile.addEventListener("click", fBucleWhile);
botonDoWhile.addEventListener("click", fBucleDoWhile);
botonCalcularMedia.addEventListener("click", fCalcularMedia);

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
    for (var i=1; i<11; i++){
        
        var numero = parseInt(prompt("Introduce el numero ".i));
        total += numero;
    }
    console.log(total/10);
}
