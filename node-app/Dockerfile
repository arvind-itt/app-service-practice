FROM node:18.15.0-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
ENTRYPOINT [ "node" ]
CMD [ "app.js" ]
