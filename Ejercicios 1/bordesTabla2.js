var boton1 = document.getElementById("pintarTabla");

//ACCIONES

boton1.addEventListener("click", fPintaTabla);

var filas = 30;
var columnas = 30;
var contCoulmnas =1;
 
function fPintaTabla() {
    
    var total = 2*(filas+culumnas)-4;
    var tabla = "<table border=1>";
    for ( i=1; i<=filas ; i++){
        tabla += "<tr id=tr'"+i+"'>";
            for (b=1; b<=columnas ; b++){
                tabla += "<td id='"+contCoulmnas+"'>";
                contCoulmnas++;
                tabla += "</td>";
            }
        tabla += "</tr>";
    }
}
function rellenaTabla() {
    
    var lineaGenerica = document.getElementById("tr"+contadorFilas);
    lineaGenerica.firstElementChild.innerHTML = i;
}