FROM node:12-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install -g npm@8.5.1

# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

RUN npm install

COPY ./build .

EXPOSE 3000

CMD [ "npm run migrations", "npm run start" ]