FROM node:18
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install

RUN git clone https://github.com/vishnubob/wait-for-it.git

COPY . .

EXPOSE 4000
CMD [ "npm", "run", "start" ]