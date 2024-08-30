# Usa una imagen base de Node.js
FROM node:18-alpine

# Crea el directorio de la aplicación
WORKDIR /app

# Copia los archivos de configuración y las dependencias
COPY package*.json ./
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Compila el código TypeScript
RUN npm run build

# Expone el puerto en el que la aplicación escuchará
EXPOSE 3000

# Define el comando para iniciar la aplicación
CMD ["node", "dist/main"]
