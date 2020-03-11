/*
//esta vaina va con fetch 
let appTiempo = {
    pintaDatos(){
        const api = "https://www.el-tiempo.net/api/json/v1/provincias";
        fetch(api)
        .then(data => {
           return  data.json()
        })
        .then(data =>{
            arrayProvincias = []
            for (provincia of data){
                arrayProvincias.push(provincia.NOMBRE_PROVINCIA) ;
                
            }
            console.log(arrayProvincias[6])
        })
    }
}

window.onload = appTiempo.pintaDatos */
let texto = document.querySelector(".texto");

let appTiempo = {

    color: "rojo",
    recibido: false,
    async pintaDatos(api) {
        respuesta = await fetch(api),
            objetoJson = await respuesta.json()
        arrayProvincias = []
        for (provincia of objetoJson) {
            arrayProvincias.push(provincia.CODPROV) 
            //nombreProvincia = document.createElement("H1");
            //nombreProvincia.innerHTML = provincia.CODPROV;
            //document.body.appendChild(nombreProvincia)
        }
        infoProvincia = await fetch("https://www.el-tiempo.net/api/json/v1/provincias/"+arrayProvincias[1])
        objetoAlbacete = await infoProvincia.json();
        console.log(objetoAlbacete)
        appTiempo.recibido = true;

        texto.classList.remove("spinner-grow")


    },
    retardo(api) {
        setTimeout(function () {
            appTiempo.pintaDatos(api)
        }, 2000)
    }

}

window.onload = appTiempo.retardo("https://www.el-tiempo.net/api/json/v1/provincias")
if (!appTiempo.recibido) {
    texto.classList.add("spinner-grow")
}


