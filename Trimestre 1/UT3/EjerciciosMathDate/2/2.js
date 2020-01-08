let boton = document.getElementById("boton");

//eventos
boton.addEventListener("click",fBoton);

//funciones
function fBoton() {
    let hoy = new Date();
    let navidad = new Date(hoy.getFullYear(),11,25)
    let contador = 0;
    while(hoy < navidad ){
        hoy.setDate(hoy.getDate()+1);
        contador++;
    }
    console.log(contador);
}