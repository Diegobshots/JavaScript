var contenedor = document.getElementById("contenedor");


class Formulario{

    constructor(idForm){
        
        this.idForm = idForm
        this.elementos = []
    }
    añadirElemento(...Elemento){
        this.elementos.push(Elemento)
        return this.conocimientos
    }
    pintarFormulario(){
        //concatena cabecera del formulario
        //bucle recorre vector elementos y los concatena en un array
        //pie del formulario
    }
}

class Elemento{
    constructor(tipoElemento, idElemento){
        switch(tipoElemento){
            case "texto":
                this.content = "Texto: <input type='text' id='"+idElemento+"'/>";
                break;
            case "numero":
                this.content = "Numero: <input type='number' id='"+idElemento+"'/>";
                break;
            case "contraseña":
                this.content = "Contraseña <input type='number' id='"+idElemento+"'/>";
                break;
        }
    }

    pintarElemento(){
        return this.content;
    }
}
let formulario1 = new Formulario(1)
