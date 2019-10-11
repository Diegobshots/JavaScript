var boton1 = window.document.getElementById("boton");

boton1.addEventListener("click", fBoton);

function fBoton() {
    var valores = window.document.getElementsByTagName("input");
    for(let i=0; i<=valores.length ; i++){
        console.log(valores[i].value)
    }
    
}