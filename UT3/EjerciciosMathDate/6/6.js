var boton = document.getElementById("boton");

boton.addEventListener("click", fBoton);

function fBoton(){
    
    for(let i=1; i<=6; i++){
        numero = Math.floor(Math.random() * 50) + 1;
        if(numero < 10){
            numero = "0"+numero;
        }
        document.getElementById("numero"+i).innerHTML = numero;
    }
}