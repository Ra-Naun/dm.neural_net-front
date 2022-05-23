FROM node:16.14-alpine

RUN apk add --update \
  python3 \
  build-base \
  gcc \
  zlib-dev \
  libpng-dev

WORKDIR /app

COPY ./app .

CMD ["sh", "-c", "yarn install && yarn dev"]
