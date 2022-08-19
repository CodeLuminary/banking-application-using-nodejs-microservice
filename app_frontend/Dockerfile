FROM node:latest

WORKDIR /src

COPY ./node .

RUN npm install

WORKDIR /app

COPY ./frontend/package*.json .

RUN npm install

COPY ./frontend .

RUN npm run build

COPY --from=bankingapp_frontend /app/dist /src

WORKDIR /src

EXPOSE 3000

CMD ["npm","run", "dev"]
