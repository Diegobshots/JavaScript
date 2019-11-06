//elementos
let boton = document.getElementById("boton");

//eventos
boton.addEventListener("click",fBoton);

//funciones
function fBoton() {
    hoy = new Date();
    let opciones = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
    let opcionesHora = {hour: "numeric", hour12:"false"}
    console.log(hoy.toLocaleDateString("es-ES", opciones)+".Hora actual: "+hoy.toLocaleTimeString("es-ES", opcionesHora)+" :"+hoy.getMinutes()+" :"+hoy.getSeconds());
}
