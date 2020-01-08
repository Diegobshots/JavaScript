var contador=1;
var contadorFilas=2;
for (i=1 ; i<=25 ; i++){
   
    
    while(i<=5){
        var botonGenerico = document.getElementById(i);
        if((i> 6 && i<10) || (i> 11 && i<15) || (i> 16 && i<20)){
            botonGenerico.innerHTML = " ";
        }else{
            botonGenerico.innerHTML = contador;
            contador++;
        }
        i++;
    }
    var lineaGenerica = document.getElementById("tr"+contadorFilas);
    lineaGenerica.firstElementChild.innerHTML = i;
    contadorFilas++;
    
    while(i>=9 && i<=13){
        var botonGenerico = document.getElementById(i);
        if((i> 6 && i<10) || (i> 11 && i<15) || (i> 16 && i<20)){
            botonGenerico.innerHTML = " ";
        }else{
            botonGenerico.innerHTML = contador;
            contador++;
        }
        i++;
    }
}
