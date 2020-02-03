---
title: UD07 - Servidor Web. DockerCompose
author: Carlos Perdices
header-includes: |
lang: es-ES
keywords: [DAW, DEWC, Servidor Web con docker compose]
---

# Pasos para montar un servidor web con Docker Compose


1. Creo mi proyecto

```shell
    mkdir cp-ServidorWeb
```

2. Dentro de este directorio, creo fichero de configuración.  (.env)

Contenido:

```txt
    MYSQL_ROOT_PASSWORD=root
    MYSQL_DATABASE=mydb      
    MYSQL_USER=user
    MYSQL_PASSWORD=password
```

3. Creo el siguiente fichero docker-compose.yml

```docker
version: '2'
services:
    db:
        image: mysql
        volumes:
            - "./.data/db:/var/lib/mysql"
        environment:
            MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
            MYSQL_DATABASE: ${MYSQL_DATABASE}
            MYSQL_USER: ${MYSQL_USER}
            MYSQL_PASSWORD: ${MYSQL_PASSWORD}
    php:
        image: php:7.1-apache
        volumes:
            - "./.data/html:/var/www/html"
        ports:
            - 8080:80
```

4. Ejecutar el docker-compose en segundo plano

```docker
    docker-compose up -d
```

5. Comprobar que el contenedor está ejecutándose

```docker
    docker ps
```

Nota: 

1. Recomiendo la herramienta kinematic dentro del entorno Docker Desktop para comprobar de forma gráfica/fácil/cómoda distintos parámetros de la configuración de docker como son los puertos, volumenes, y distintos parámetros de red.

2. Recuerda: localhost:8080 (o el puerto que le hayas indicado para mapear los puertos en local.)