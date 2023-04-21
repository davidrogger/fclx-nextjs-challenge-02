FROM node:19-slim


WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

EXPOSE 3000

COPY . .

CMD ["npm", "start"]
