FROM node:21-alpine3.17
WORKDIR /api
COPY package*.json ./
RUN npm install --prod
COPY ./src ./src
EXPOSE 3000
CMD ["node", "./src/index.js"]

#docker build -t img-becleaverapi .
#docker run --env-file ./.env -d -p 3000:3000 --name api-becleaver img-becleaverapi