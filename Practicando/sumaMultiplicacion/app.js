/* 
suma = valor1 +valor2
multiplicacion = suma *2
resta = multiplicacion-suma 
*/
let programa = {
    color: false,
    suma(valor1, valor2) {
        return valor1 + valor2
    },
    multiplicacion(numero) {
        return numero * 2
    },
    resta(multiplicado, sumado) {
        return multiplicado - sumado
    },
    async run(valor1, valor2) {
        let sumada = await this.suma(valor1, valor2)
        let multiplicada = await this.multiplicacion(sumada)
        let resta = await this.resta(multiplicada, sumada)
        document.querySelector(".resta").innerHTML = "El resultado es " + resta
        console.log(this.color)
    },
    //metodo tipo Pormesa

    metodoPromesa(valor1, valor2) {
        const promesa = new Promise(function (resolve, reject) {
            resolve(valor1, valor2); //si contiene valores

            if (valor1 === null || valor2 === null) {
                reject(new Error("No existen valores"))
            }
        }) //fin promesa

        return promesa;
    },//fin metodo

    //metodo de calculo que llama al metodo tipo promesa, que si se cumple me realiza
    //el  metodo async calculo
    calculoPromesa(val1, val2) {
        this.metodoPromesa(val1, val2)
            .then(function () {
                objCalculo.calculo(val1, val2)
            })
            .catch(err => console.log(err.message))
    }
}
window.onload = programa.run(3, 9);