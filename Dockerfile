FROM node

WORKDIR /src

COPY . .

EXPOSE 9000

CMD node index.js