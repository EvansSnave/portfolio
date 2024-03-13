FROM node:alpine

WORKDIR /app

COPY . ./

RUN npm install -g @angular/cli

RUN npm install

EXPOSE 4200

CMD ng serve --host 0.0.0.0 --port 4200
