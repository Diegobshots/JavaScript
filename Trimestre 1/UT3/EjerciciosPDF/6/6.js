var boton = document.getElementById("boton");
boton.addEventListener("click", fBoton);

function fBoton(){
    operacion = document.getElementById("operacion").value;
    arrayOp = operacion.split("");
    for ( i= 0 ; i< arrayOp.length; i++){
        if(arrayOp[i]=="("){

        }
    }
}
function operaParentesis(array){
    for ( i= 0 ; i< array.length; i++){
        if(array[i]=="("){
        }
    }
}