FROM node:14-alpine

RUN apk update && apk upgrade && apk add python3 g++ make

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]