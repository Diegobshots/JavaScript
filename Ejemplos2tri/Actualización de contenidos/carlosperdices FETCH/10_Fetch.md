---
title: UD05 - Fetch
author: Carlos Perdices
header-includes: |
lang: es-ES
keywords: [DAW, DEWC, Fetch]
---

# FETCH

Alternativa a XMLHTTPRequest que nos brindan los navegadores Chrome, Chrome Canary y Firefox para trabajar con este tipo de peticiones. Esta alternativa se llama "Fetch API"

## Ejemplo básico

```js
    fetch('https://dominio.com/archivo-ajax', {
    method: 'get'
    }).then(function(respuesta) {
    console.log(respuesta)
    }).catch(function(err) {
    // Error :(
});
```

Como podemos ver esta API hace uso de las promesas para el manejo de callbacks y resultados.

```js
    // Podemos encadenar promesas, para un manejo más "avanzado"
    fetch('https://dominio.com/archivo-ajax').then(function(respuesta) {
    return //...
    }).then(function(valorRetornado) {
    // ...
    }).catch(function(err) {
    // Error :(
});
```

## UTILIZANDO REQUEST

Si le indicamos el Request al fetch podremos enviar peticiones más especificas.

Ejemplo:

```js
    var peticion = new Request('https://dominio.com/archivo-ajax', {
    method: 'POST',
    mode: 'cors',
    redirect: 'follow',
    headers: new Headers({
        // Encabezados
    'Content-Type': 'text/plain'
    })
    });

    // Ahora lo utilizamos
    fetch(peticion).then(function() { /* manejo de la respuesta */ });
```

### Parámetros REQUEST

1. method - GET, POST, PUT, DELETE, HEAD
2. url - URL de la petición
3. headers - el objeto de los encabezados
4. referrer - remitente de la solicitud
5. mode - cors, no-cors, same-origin
6. credentials - ¿enviar cookies con la peticiónt? omit, same-origin
7. redirect - follow, error, manual
8. integrity - valor de la integridad
9. cache - modo cache (default, reload, no-cache)


## UTILIZANDO RESPONSE

Se encuentra dentro de laa parte __then__ de la función __fetch__. Dentro de esta instancia podemos establecer la estructura del objeto retornado de cada petición.

Ejemplo:

```js
    // Creamos la estructura de la respuesta
    var respuesta = new Response('.....', {
    ok: false,
    status: 404,
    url: '/'
    });

    fetch('https://dominio.com/archivo-ajax')
    .then(function(respuesta) {
    console.log('Estado: ', respuesta.status); // Hacemos uso del status establecido en el Response
    });
```

## MANEJANDO OBJETOS JSON

La respuesta en el callback contiene una función .json() que nos permite convertir información en texto plano a un objeto de JSON. 

```js
    fetch('https://dominio.com/archivo-ajax').then(function(respuesta) {
    // Convertir a JSON
    return respuesta.json();
    }).then(function(j) {
    // Ahora 'j' es un objeto JSON
    console.log(j);
});

```

## ENVIO DE INFORMACIÓN EN UN FORMULARIO

Usandolo como envío de información dentro de la etiqueta FORM

```js
    fetch('https://dominio.com/enviar-formulario', {
    method: 'post',
    body: new FormData(document.getElementById('formulario-contacto'))
});
```
