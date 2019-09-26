//Botones
var boton1 = document.getElementById("e1");
var boton2 = document.getElementById("e2");

//Eventos
boton1.addEventListener("click",fEjercicio1);
boton2.addEventListener("click",fEjercicio2);

//Funciones
function fEjercicio1() {
    
    var edad =0;
    edad = prompt("Introduce tu edad: ");
    if (edad <18){
        alert("No puedes conducir");
    }else{
        alert("Puedes conducir");
    }
}
function fEjercicio2(){
    var nota = parseInt(prompt("Introduce tu nota: "));
    switch(nota){
        case 0: case 1: case 2:
            alert("Muy deficiente");
            break;
        case 3: 
        case 4:
            alert("Deficiente");
            break;
        case 5: 
        case 6:
            alert("Bien");
            break;
        case 7: case 8:
            alert("Notable");
            break;
        case 9: case 10:
            alert("Sobresaliente");
            break;
        default:
            alert("Solo parametros entre 0 y 10");
            break;
    }
}