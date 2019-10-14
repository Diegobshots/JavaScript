var boton1 = window.document.getElementById("boton");
var boton2 = window.document.getElementById("botonMetodos")
var boton3 = window.document.getElementById("botonPropiedades")
var listaPropiedades= "<h1> Propiedades </h1> ";
listaMetodos = "<h1> Metodos </h1> ";

boton1.addEventListener("click", fBoton);
boton2.addEventListener("click", fBotonMetodos);
boton3.addEventListener("click", fBotonPropiedades);

function fBoton() {
    var valores = window.document.getElementsByTagName("input");
    for(let i=0; i<=valores.length ; i++){
        console.log(valores[i].value)
    }
    
}

function fBotonMetodos() {
    var metodos = Object.keys(window);
    for (let i=0 ; i<=metodos.length ; i++){
        listaMetodos += metodos[i]+"  <br/> ";
    }
    document.getElementById("metodos").innerHTML = listaMetodos;
}
function fBotonPropiedades() {
    var propiedades = Object.getOwnPropertyNames(window);
    for (let i=0 ; i<=propiedades.length ; i++){
        listaPropiedades += propiedades[i]+" <br/> ";
    }
    document.getElementById("propiedades").innerHTML = listaPropiedades;
    //Se borra todo cuando acaba
}