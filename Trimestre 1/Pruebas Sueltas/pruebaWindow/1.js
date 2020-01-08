var boton1 = window.document.getElementById("boton");
var boton2 = window.document.getElementById("botonMetodos")
var boton3 = window.document.getElementById("botonPropiedades")
var listaPropiedades= "<h1> Propiedades </h1> ";
listaMetodos = "<h1> Metodos </h1> ";

boton1.addEventListener("click", fBoton);
boton2.addEventListener("click", fBotonMetodos);
boton3.addEventListener("click", fBotonPropiedades);

function fBoton() {
    var inputs = " ";
    var valores = window.document.getElementsByTagName("input");
    for(let i=0; i<valores.length ; i++){
        inputs += valores[i].value + "%20";
    }
    var pagina = window.open("indexCopy.html?"+inputs);
    var urlNueva = pagina.location.href;
    arrayURL = urlNueva.split("?");
    var contenido = arrayURL[1];
    arrayInputs = contenido.split("%20");

    for (let b=0 ; b<arrayInputs.length ; b++){
        //aqui recorremos el array y lo escribimos en los inputs de la otra pagina
        //pagina.document.getElementById.innerhtml = arrayInputs[b]
    }
    //Enviar por url string inputs
    //Abrir pagina cargando inputs en los url (creo que con window.open)
    //Dividir string obtenido y meterlo en el nuevo formulario
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