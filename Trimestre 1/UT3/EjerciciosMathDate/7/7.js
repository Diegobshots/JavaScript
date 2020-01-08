let boton = document.getElementById("calcular");

boton.addEventListener("click", fCalcular);

function fCalcular(){
    base = document.getElementById("base").value;
    altura = document.getElementById("altura").value;
    area = base*altura;

    document.getElementById("area").value = area;
}