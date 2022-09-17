FROM node:current-alpine3.16 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:current-alpine3.16 as prod
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3000
CMD node index.js
