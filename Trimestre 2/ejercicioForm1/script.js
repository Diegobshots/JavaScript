var inputTelefono = document.getElementById("telefono");
var inputCorreo = document.getElementById("correo");
var inputIP = document.getElementById("direccionIP");
var boton = document.getElementById("enviar");


var formulario = {
    
    evaluarTelefono : function (compruebaTelefono){
        telefono = document.getElementById("telefono").value;
        expresion = /^(\+34|0034|34)?[6|7|8|9][0-9]{8}$/;
        if (expresion.test(telefono)){
            inputTelefono.style.border = "2px solid green";

        }else{
            inputTelefono.style.border = "2px solid red";
        }
    },
    evaluarCorreo : function (compruebaCorreo){
        correo = document.getElementById("correo").value;
        expresion = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
        if (expresion.test(correo)){
            inputCorreo.style.border = "2px solid green";

        }else{
            inputCorreo.style.border = "2px solid red";
        }
    },
    evaluarIP : function (compruebaIP){
        ip = document.getElementById("direccionIP").value;
        expresion = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if (expresion.test(ip)){
            inputIP.style.border = "2px solid green";
        }else{
            inputIP.style.border = "2px solid red";
        }
    }

}

//eventos
inputTelefono.addEventListener("focusout", formulario.evaluarTelefono);
inputCorreo.addEventListener("focusout", formulario.evaluarCorreo);
inputIP.addEventListener("focusout", formulario.evaluarIP);