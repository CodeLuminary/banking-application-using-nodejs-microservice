FROM node:latest

WORKDIR /app

COPY ./frontend/package*.json .

RUN npm install

COPY ./frontend .

RUN npm run build

WORKDIR /app/dist

COPY ./node .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
