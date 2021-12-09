## Stage build
FROM node:17-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

## Stage run
FROM node:17-alpine

WORKDIR /app

RUN apk update && apk add bash

COPY --from=builder /app/dist /app

RUN npm i --global http-server

CMD ["http-server", "."]