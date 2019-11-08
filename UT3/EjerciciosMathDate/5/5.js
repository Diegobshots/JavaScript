//elementos
let boton = document.getElementById("boton");

//eventos
boton.addEventListener("click", verFecha);

//funciones
function verFecha(){
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let anio = document.getElementById("anio").value;

    let fecha = new Date(anio,mes,dia);
    console.log(fecha.toLocaleDateString());
    //una fecha que no existe como 31 de febrero se autocorrige a 3 de marzo
}