FROM node:alpine

WORKDIR /app

# Add /app/node/app/node_modules/.bin to $PATH
ENV PATH /app/node_modules/.bin:$PATH

EXPOSE 4200

COPY package*.json .

RUN npm install

COPY . .

CMD ["ng", "serve", "--host","0.0.0.0", "--disable-host-check", "--poll=2000"]