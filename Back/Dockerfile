# Usa Node 20 para evitar incompatibilidades
FROM node:20

# Instala cliente de Postgres
RUN apt-get update && apt-get install -y postgresql-client

# Carpeta de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos de dependencias primero
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código al contenedor
COPY . .

# Expone el puerto donde corre tu API
EXPOSE 5000

# Comando que se ejecuta al iniciar el contenedor
CMD ["npm", "start"]
