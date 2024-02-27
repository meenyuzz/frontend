FROM krmp-d2hub-idock.9rum.cc/goorm/node:16.13.1
# FROM node:16.13.1
WORKDIR /usr/src/app
COPY ./ ./

RUN npm install -g npm@8.1.2

RUN npm ci
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "build"]