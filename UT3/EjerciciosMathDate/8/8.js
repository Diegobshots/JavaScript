let boton = document.getElementById("calcular");

//eventos 
boton.addEventListener("click", fCalcular);

//funciones
function fCalcular(){
    numeroDeMuestras = document.getElementById("muestras").value;
    arrayNumeros = [];
    for (let i = 0; i<numeroDeMuestras; i++){
        numero = Math.floor(Math.random() * 50) + 1;
        arrayNumeros.push(numero);
        
    }
    let media = fCalculaMedia(arrayNumeros);
    let numeros = fPintaVector(arrayNumeros);
    let maximo = fVerMaximoDeArray(arrayNumeros);
    let minimo = fVerMinimoDeArray(arrayNumeros);
    let moda = fCalculaModa(arrayNumeros);
    
    document.getElementById("media").innerHTML = "La media de los numeros es: "+media;
    document.getElementById("numeros").innerHTML = "Los numeros generados son: "+numeros;
    document.getElementById("maximo").innerHTML = "El valor mas alto es: "+maximo;
    document.getElementById("minimo").innerHTML = "El valor mas bajo es: "+minimo;
    document.getElementById("moda").innerHTML = "La moda es: "+moda;
  
}

function fCalculaMedia(vector){
    let total = 0;
    for (let i=0; i < vector.length; i++){
       total += vector[i];
    }
    let media = total/vector.length;
    media = Math.round(media);
    return media;
}

function fPintaVector(vector){
    let elementosDelVector = "";
    for (let i=0; i < vector.length; i++){
        if (i != vector.length-1){
            elementosDelVector += vector[i].toString() + ", ";
        }else{
            elementosDelVector += vector[i].toString();
        }
    }
    return elementosDelVector;
}

function fVerMaximoDeArray(array){
    return Math.max.apply(null, array);
}

function fVerMinimoDeArray(array){
    return Math.min.apply(null, array);
}

function fCalculaModa(vector){
    let maxOcurrencias = 0;
    let moda = 0;
    for (let i=0; i < vector.length; i++){
        let numeroEvaluado = vector[i];
        ocurrencias = 0;
        for (let b=0; b < vector.length; b++){
            if (numeroEvaluado == vector[b]){
                ocurrencias++;
            }
        }
        if (ocurrencias > maxOcurrencias){
            maxOcurrencias = ocurrencias;
            moda = numeroEvaluado;
        }
    }
    return moda;
}