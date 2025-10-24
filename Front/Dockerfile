# Usa la imagen oficial de Nginx
FROM nginx:alpine

# Copia todo tu frontend al directorio que Nginx sirve
COPY . /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando por defecto para Nginx
CMD ["nginx", "-g", "daemon off;"]
