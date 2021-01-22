FROM strapi/base

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

# RUN yarn install
RUN npm install

COPY . /app

RUN npm build

EXPOSE 1337

# ENV NODE_ENV production

CMD ["npm", "start"]