FROM node:12.10.0

WORKDIR /usr/app

COPY package*.json ./
RUN npm install -global serve

RUN npm ci -qy

COPY . .

RUN npm run build

# EXPOSE 3000

CMD ["serve", "-p", "3000", "-s", "./build" ]
