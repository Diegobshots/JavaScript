//capturamos los elementos del DOM
let inputNombreApellidos = document.getElementById("nombreApellidos");
let inputTelefono = document.getElementById("telefono");
let inputEmail = document.getElementById("email");
let inputDireccion = document.getElementById("direccion");
let textArea = document.getElementById("resumen");
let boton = document.getElementById("Validar");

//Creamos el objeto formulario con el metodo evaluar datos y un atributo booleano que indica si no hay ningun error al validar

let formulario = {
    
    todoCorrecto : true,
    evaluarDatos(){
        //borramos el contenido de text area
        textArea.innerHTML ="";

        //evaluamos nombre y apellidos
        nombreApellidos = inputNombreApellidos.value;
        expresion = /^[a-z | A-Z]+,[a-z | A-Z]+$/;
        if (!expresion.test(nombreApellidos)){
            textArea.innerHTML +="El campo nombreApellidos cuyo contenido es '"+nombreApellidos+"' no cumple los requisitos\n";
            //si ha fallado, ya no está todo correcto, de modo que cambia el estado booleano. Esto pasa en todos los "if" siguientes
            formulario.todoCorrecto = false;
        }
        //evaluamos el telefono
        telefono = inputTelefono.value;
        expresion = /^\(949\)-[0-9][0-9]-[0-9][0-9]-[0-9][0-9]$/;
        if (!expresion.test(telefono)){
            textArea.innerHTML +="El campo inputTelefono cuyo contenido es '"+telefono+"' no cumple los requisitos\n";
            formulario.todoCorrecto = false;

        }
        //evaluamos el email
        email = inputEmail.value;
        expresion = /^[a-z|0-9]+@gmail\.com$/;
        if (!expresion.test(email)){
            textArea.innerHTML +="El campo inputEmail cuyo contenido es '"+email+"' no cumple los requisitos\n";
            formulario.todoCorrecto = false;

        }
        //evaluamos la direccion
        direccion = inputDireccion.value;
        expresion = /[0-9]+/;
        if (!expresion.test(direccion)){
            textArea.innerHTML +="El campo inputDireccion cuyo contenido es '"+direccion+"' no cumple los requisitos\n";
            formulario.todoCorrecto = false;

        }
        if(formulario.todoCorrecto){
            textArea.innerHTML ="Datos validados correctamente";
        }
        
    }

}

//evento click del boton validar

boton.addEventListener("click", formulario.evaluarDatos);
