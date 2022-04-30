sudo docker exec -it psql-container /bin/bash

docker ps

docker compose down -v

RUN npm install -g npm@8.5.1
RUN apk add --update python make g++ && rm -rf /var/cache/apk/*
RUN npm install


command: ["npm", "run", "dev"]

RUN npm install -g npm@8.5.1
RUN apk add --update python make g++ && rm -rf /var/cache/apk/*
RUN npm install

FROM node:12

WORKDIR /usr/app
COPY package.json ./

RUN ls

COPY /build /usr/app/

EXPOSE 3000
CMD ["ls"]



"typeorm": "typeorm-ts-node-commonjs",