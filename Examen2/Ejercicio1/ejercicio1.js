//capturamos los elementos del DOM
let boton = document.getElementById("boton");
let formularios = document.getElementById("formularios");

//nuestro objeto aplicacion
let aplicacion = {
    async pintaDatos(){
        respuesta = await fetch('../alumnos.json');
        objetoAlumnos  = await respuesta.json();
        primerAlumno = await objetoAlumnos['items'];
        for (alumno of primerAlumno){
            if (alumno.age < 18){
                //Solo hay un menor de edad, pero si cambiamos a mayor de edad en el if salen mas
                //Crea un formulario relleno con los datos de cada alumno con edad menor a 18
                //creamos elementos html, los rellenamos y los añadimos en orden
                
                formularioAlumno = document.createElement("FORM");
                saltoLinea = document.createElement("BR");
                saltoLinea2 = document.createElement("BR");
                saltoLinea3 = document.createElement("BR");
                saltoLinea4 = document.createElement("BR");
                inputNombre = document.createElement("INPUT");
                inputEdad = document.createElement("INPUT");
                selectSexo = document.createElement("SELECT");
                optionSexo = document.createElement("OPTION");
                selectEstado = document.createElement("SELECT");
                optionEstado = document.createElement("OPTION");
                inputNombre.value = alumno.name;
                inputEdad.value = alumno.age;
                optionSexo.innerHTML = alumno.gendre;
                selectSexo.appendChild(optionSexo);
                optionEstado.innerHTML = alumno.status;
                selectEstado.appendChild(optionEstado);
                formularioAlumno.appendChild(inputNombre);
                formularioAlumno.appendChild(saltoLinea);
                formularioAlumno.appendChild(inputEdad);
                formularioAlumno.appendChild(saltoLinea2);
                formularioAlumno.appendChild(selectSexo);
                formularioAlumno.appendChild(saltoLinea3);
                formularioAlumno.appendChild(selectEstado);
                formularios.appendChild(formularioAlumno);
            }
        }
    }
}

//llamamos al metodo de nuestro objeto que escribe los formularios pertinentes
boton.addEventListener("click", aplicacion.pintaDatos);