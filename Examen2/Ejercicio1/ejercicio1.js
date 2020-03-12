let boton = document.getElementById("boton");
let formularios = document.getElementById("formularios");

//nuestro objeto aplicacion
let aplicacion = {
    async pintaDatos(){
        respuesta = await fetch('../alumnos.json')
        objetoAlumnos  = await respuesta.json();
        primerAlumno = await objetoAlumnos['items'];
        for (alumno of primerAlumno){
            if (alumno.age < 18){
                //Crea un formulario relleno con los datos de cada alumno con edad menor a 18
                formularioAlumno = document.createElement("FORM");
                saltoLinea = document.createElement("BR");
                inputNombre = document.createElement("INPUT");
                inputEdad = document.createElement("INPUT");
                selectSexo = document.createElement("SELECT")
                optionSexo = document.createElement("OPTION")
                inputNombre.value = "Nombre: "+alumno.name;
                inputEdad.value = "Edad: "+alumno.age;
                optionSexo.value = "sexo: "+alumno.gendre;
                selectSexo.appendChild(optionSexo);
                formularioAlumno.appendChild(inputNombre)
                formularioAlumno.appendChild(saltoLinea)
                formularioAlumno.appendChild(inputEdad)
                formularioAlumno.appendChild(saltoLinea)
                formularioAlumno.appendChild(selectSexo);
                formularios.appendChild(formularioAlumno)
            }
        }
    }
}

//llamamos al metodo de nuestro objeto que escribe los formularios pertinentes
boton.addEventListener("click", aplicacion.pintaDatos)