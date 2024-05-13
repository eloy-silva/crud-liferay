FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install


##ENV DOCKERIZE_VERSION v0.6.1

##RUN apt-get update && apt-get install -y dockerize

##RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
##    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
##    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz


ENV DOCKERIZE_VERSION v0.7.0

RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget



EXPOSE 3000

CMD ["nodemon", "index.js"]