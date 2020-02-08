var valor1 = 3;
var valor2 = 4;



var suma = (callback) => {
    var rSuma;
    setTimeout(() => {
        rSuma = valor1 + valor2;
        console.log(rSuma);
        callback(rSuma);
    }, 3000);
}

var multiplicacion = (callback, rSuma) => {
    var multiplicacion;
    setTimeout(() => {
        rMultiplicacion = rSuma * 2;
        console.log(rMultiplicacion);
        callback(rMultiplicacion, rSuma);
    }, 3000);
}

var division = (rMultiplicacion, rSuma) => {
    var rDivision = rMultiplicacion - rSuma;
    console.log(rDivision);
}

//aqui empieza la movi

suma(multiplicacion(division));



