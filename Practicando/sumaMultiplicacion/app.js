/* 
suma = valor1 +valor2
multiplicacion = suma *2
resta = multiplicacion-suma 
*/
let programa = {
    suma(valor1, valor2){
        setTimeout = () =>{

        }
        return valor1 + valor2
    },
    multiplicacion(numero){
        return numero*2
    },
    resta(multiplicado, sumado){
        return multiplicado -sumado
    },
    async run(valor1, valor2){
        sumada = await programa.suma(valor1, valor2)
        multiplicada = await programa.multiplicacion(sumada)
        resta = await programa.resta(multiplicada, sumada)
        document.querySelector(".resta").innerHTML = "El resultado es "+resta
    }
}
window.onload = programa.run(3,9);