---
title: UD07 - Cors
author: Carlos Perdices
header-includes: |
lang: es-ES
keywords: [DAW, DEWC, Ajax. Objeto XMLHTTPRequest]
---

## CORS

1. Protocolo Cross-Origin Resource Sharing (Compartición de recursos de distintos orígenes).

2. Realizar peticiones a otros dominios siempre y cuando el dominio de destino esté de acuerdo en recibir peticiones del dominio de origen.

3. Tanto navegador como servidor tienen que implementar el protocolo.

4. Desde el servidor, se envía en cabecera:

```js
    Access-Control-Allow-Origin: http://dominio-permitido.com
```

