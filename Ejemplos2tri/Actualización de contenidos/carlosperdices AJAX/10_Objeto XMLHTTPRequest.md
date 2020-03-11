---
title: UD07 - Ajax. Objeto XMLHTTPRequest
author: Carlos Perdices
header-includes: |
lang: es-ES
keywords: [DAW, DEWC, Ajax. Objeto XMLHTTPRequest]
---


# Ajax. Objeto XMLHTTPRequest

XMLHttpRequest es un objeto JavaScript que fue diseñado por Microsoft y adoptado por Mozilla, Apple y Google. Actualmente es un estándar de la W3C. Proporciona una forma fácil de obtener información de una URL sin tener que recargar la página completa. Una página web puede actualizar sólo una parte de la página sin interrumpir lo que el usuario está haciendo. XMLHttpRequest es ampliamente usado en la programación AJAX.

A pesar de su nombre, XMLHttpRequest puede ser usado para recibir cualquier tipo de dato, no solo XML

## Crear una instancia

```js
    var req = new XMLHttpRequest();
```

## Propiedades más importantes

__onreadystatechange:__ Se llama cuando el atributo readyState cambia. El callback se llama desde la interfaz del usuario.
Sirve para definir una función que será llamada automáticamente cada vez que cambie la propiedad readyState del objeto.

__readyState:__ Estado de la petición:


| Valor |	Estado  |	Descripción |
| ---------- | ---------- |---------- |
|0	|UNINITIALIZED	|todavía no se llamó a open().|
|1	|LOADING	|todavía no se llamó a send().|
|2	|LOADED	|send() ya fue invocado, y los encabezados y el estado están disponibles.|
|3	|INTERACTIVE|	Descargando; responseText contiene información parcial.|
|4	|COMPLETED	|La operación está terminada.|

__responseText:__ La respuesta al pedido como texto, o null si el pedido no fue exitoso o todavía no se envió. Sólo lectura.

__responseXML:__ La respuesta es analizada como si fuera text/xml. 

__status:__ El estado de la respuesta al pedido. 

| Valor |	Descripción |
| ---------- |--------- |
|200 | respuesta correcta.|
|404 | no encontrado.|
|500 | error interno del servidor|

__statusText:__ La cadena de respuesta que devuelve el HTTPserver. A diferencia de status, este incluye el texto completo del mensaje de respuesta ("200 OK", por ejemplo). Sólo lectura.


## Métodos más importantes

__abort():__ Aborta el pedido si este ya ha sido enviado

__getAllResponseHeaders():__ Devuelve todos los encabezados de respuesta como una cadena.

__getResponseHeader():__ Devuelve el texto de un encabezado específico.

__open():__ Inicializa el pedido
    
Parámetros:

|method| url| async| user| password|
| ---------- | ---------- |---------- |---------- |---------- |
|El método HTTP a usar: tanto "POST" o "GET". Se ignora para urls que no son de HTTP. | La URL a la que se envía el pedido.|Un parámetro booleano opcional, predeterminado es true, que indica si se debe o no realizar la operación de forma asíncrona. Si este valor es false, el método send() no se devuelve hasta que se reciba la respuesta completa. Si es true, la notificación de una transacción completada se proporciona mediante los oyentes de eventos. Esto debe ser true si el atributo multipart es verdadero o se lanzará una excepción.|El nombre de usuario es opcional solo es usado con fines de autenticación, de forma predeterminada es una cadena vacía.|La contraseña es opcional solo es usado con fines de autenticación, de forma predeterminada es una cadena vacía.|


__send():__ Envía la petición al servidor
```js
    xmlhttp.send();
```


## Ejemplo

```js
xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        contenidosRecibidos = xmlhttp.responseText.split(",");
        /* AQUI TRABAJARÍA CON LOS DATOS... TRABAJANDO CON EL DOM*/
    }

    xmlhttp.open("GET"," ejemplo.php?param1="+str);
    xmlhttp.send();
}
```