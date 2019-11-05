let boton = document.getElementById("boton");

//eventos

boton.addEventListener("click",fBoton);

//funciones

/*const fBoton = () => {
    for (let i=2014; i<=2050 ; i++){
        let esteAnio = new Date(i, 0,1);
        if (esteAnio.getDay === 0){
            console.log("En la fecha"+ esteAnio+" el 1 de Enero es Domingo");
        }
    }
}
*/

function fBoton() {
    for (let i=2014; i<=2050 ; i++){
        let esteAnio = new Date(i, 0,1);
        if (esteAnio.getDay() === 0){
            console.log("En la fecha "+ i +" el 1 de Enero es Domingo");
        }
    }
}