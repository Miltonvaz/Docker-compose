Arquitectura de Microservicios con Docker Compose
Objetivo General

Diseñar e implementar una arquitectura de microservicios utilizando Docker Compose, que integre un frontend web, una API intermedia y una base de datos con persistencia.
El objetivo es comprender el funcionamiento de contenedores, redes internas, volúmenes persistentes y dependencias entre servicios.

Estructura del Proyecto
project/
├── backend/
│   ├── src/
│   ├── package.json
│   ├── Dockerfile
│   └── .env
├── frontend/
│   ├── src/
│   ├── package.json
│   └── Dockerfile
|── milton_vazquez.sql
├── docker-compose.yml
└── README.md
Docker Compose

Archivo docker-compose.yml define los tres servicios:

Red interna: comunicación por nombre de contenedor.

Dependencias: depends_on asegura orden de arranque (db → backend → frontend).

Volúmenes: persistencia de datos.


Manual Paso a Paso para Levantar el Proyecto

Clonar el repositorio
git clone https://github.com/Miltonvaz/Docker-compose.git
cd Docker-compose

Levantar los contenedores
se utiliza el comando docker-compose up --build

Flujo de datos
Frontend (React)
      |
      v
Backend API (Node.js)
      |
      v
Base de datos (PostgreSQL)

