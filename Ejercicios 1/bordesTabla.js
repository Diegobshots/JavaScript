
for (i=1 ; i<=25 ; i++){
    var botonGenerico = document.getElementById(i);
    if((i> 6 && i<10) || (i> 11 && i<15) || (i> 16 && i<20)){
        botonGenerico.innerHTML = " ";
    }else{
        botonGenerico.innerHTML = i;
    }
    
}