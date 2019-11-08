//elementos
let boton = document.getElementById("boton");

//eventos
boton.addEventListener("click",fBoton);

//funciones
function fBoton() {
    let actualizacion = setInterval(reloj, 1000);
    
}
function reloj(){
    reloj = document.getElementById("h2");
    
    hoy = new Date();
    hora = hoy.toLocaleTimeString();
    
    document.getElementById("reloj").innerHTML = hora;
}