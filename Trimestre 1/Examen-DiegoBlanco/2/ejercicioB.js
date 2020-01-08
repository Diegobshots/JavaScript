var fecha = new Date();
var mes = fecha.getMonth();
var meses=document.getElementById("meses");

var cadena = "";
let opciones = {month: "long"};

cadena = mes.toLocaleDateString("es-ES", opciones);


meses.innerHTML += cadena;
