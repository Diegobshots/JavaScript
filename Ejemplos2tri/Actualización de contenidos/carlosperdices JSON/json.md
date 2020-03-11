---
title: UD05 - Expresiones Regulares
author: Carlos Perdices
header-includes: |
lang: es-ES
keywords: [DAW, DEWC, Expresiones Regulares]
---

# JSON (JavaScript Object Notation) 

## **Definición**

Formato de texto pensado para el intercambio de datos. Su sintaxis está basada originalmente en la sintaxis de JavaScript, pero realmente es independiente de cualquier lenguaje de programación.

## **Sintaxis**

En JSON existen dos tipos de elementos

1. Matrices (arrays): Las matrices son listas de valores separados por comas. Las matrices se escriben entre corchetes [ ]


```json
    [7, "carlos", "Ejemplo"]
```


2. Objetos (objects). Los objetos son listas de parejas nombre / valor. El nombre y el valor están separados por dos puntos : y las parejas están separadas por comas. Los objetos se escriben entre llaves { } y los nombres de las parejas se escriben siempre entre comillas dobles.

```json
    {"nombre": "Carlos", "edad": 25}
```
   

3. Los espacios en blanco y los saltos de línea no son significativos, es decir, puede haber cualquier número de espacios en blanco o saltos de línea separando cualquier elemento o símbolo del documento.

```json
[
  {
    "nombre": "Pepito Conejo",
    "edad": 25,
    "carnet de conducir": true
  },
  {
    "nombre": "Ana Barberá",
    "edad": 90,
    "carnet de conducir": false
  }
]

```

Como podemos comprobar en los ejemplos anteriores los valores pueden ser:

**Números** (sin comillas, pudiendo ser enteros, decimales o en notación exponencial)

**Cadenas** (comillas dobles)

**Valores booleanos** (sin comillas), null (sin comillas)

## **Usos de JSON**

Extendidos en aplicaciones web y en aplicaciones Cliente/Servidor

## **MÉTODOS PARA TRABAJAR CON JSON**

__JSON.PARSE(TEXT[, REVIVER ])__

El método JSON.parse() recibe una cadena JSON y en base a esta cadena construye un objeto JavaScript.

Ejemplo básico:

```js
  var objetoJson = JSON.parse('{"clave":"valor"}');
  console.log(objetoJson.clave); // logs "valor"
```

Otro ejemplo:
```js
var textoJson = '{"usb" : 20, "mouse" : 30, "mousepad": 10}',
precioConIgv = function(producto, precio){
  if (producto === "mousepad"){
    return undefined; // no lo considero en el nuevo objeto
  }
  if (producto === ""){ // última confirmación
    return precio; // retornamos el nuevo objeto
  }
  return precio + (precio * 0.18); // manipulamos a todos los demas
},
objetoJson = JSON.parse(textoJson, precioConIgv);
console.log(objetoJson); // logs Object {usb: 23.6, mouse: 35.4}
```

__JSON.STRINGIFY:__

El método JSON.stringify() recibe un objeto JavaScript y devuelve su JSON equivalente y puede tomar hasta tres parámetros.

1. Obligatorio y suele ser un Objeto o Array, en ocasiones siempre y cuando la lógica de la aplicación lo requiera también puede ser una cadena, booleano, número o un valor nulo.

2. Parámetro opcional **replacer** es una función que altera la forma en que los objetos y los arrays se encadenan. Puede ser una función que tiene dos parámetros Esta función es como un bucle que itera las claves y valores, lo cual nos permite filtrar los valores.

3. Parámetro opcional **space** es una cadena o número usado para insertar caracteres o espacios en blanco en la cadena de texto JSON, para una mejor legibilidad. Si ingresamos un número este indicará la cantidad de espacios en blanco que se usarán. El valor máximo para este número será 10, si ingresas un número mayor a 10 solo usará 10 espacios en blanco como máximo.

Ejemplos:

```js
  var objetoJavascript = {"clave" : "valor"},
  textoJson = JSON.stringify(objetoJavascript);

  console.log(typeof textoJson); // logs "string"
  console.log(textoJson); // logs {"clave":"valor"}
```

```js
    var filtro = function (clave, valor) {
      if (clave === "hora") {
        return undefined;
      }
      return valor;
    }

    var objetoJavascript = {"hora": 11, "dia": 1, "mes": 7, "año": 2014},
        textoJson = JSON.stringify(objetoJavascript , filtro, 4);
        console.log(textoJson);
        /*
        logs:
        {
            "dia": 1,
            "mes": 7,
            "año": 2014
        }
        */
```

