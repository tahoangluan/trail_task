FROM node:12.2.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
#There is some diffence ways to run a vue project.
#the easiest(i think so) is with cli: command line Interface
RUN npm install @vue/cli@3.7.0 -g

CMD ["npm", "run", "serve"]