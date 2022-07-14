FROM node:17

WORKDIR /src

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 3000

#CMD ["npm", "start"]

CMD ["npm", "run", "dev"]
