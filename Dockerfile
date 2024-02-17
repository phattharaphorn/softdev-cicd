FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# RUN yarn install --cache-folder ./yarn-cache

RUN yarn install

COPY . .

EXPOSE 5000

CMD [ "node", "app.js" ]