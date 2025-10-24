FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm start 

COPY . .

EXPOSE 5000

CMD ["node", "src/server.js"]