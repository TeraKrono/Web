FROM node:20.10
WORKDIR /app
COPY package.json package-lock.json .
RUN npm i
COPY . .
CMD [ "npm", "start" ]