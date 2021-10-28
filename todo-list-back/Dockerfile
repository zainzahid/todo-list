FROM node:12-alpine as build-step

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm run test

COPY . /app

CMD [ "npm","start" ]