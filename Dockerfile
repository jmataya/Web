FROM ubuntu:16.04

# Install node and dependencies
RUN apt-get update
RUN apt-get install -y build-essential curl
RUN apt-get install -y nodejs npm
RUN npm install -g n
RUN n stable

# Install application dependencies
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm set progress=false
RUN cd /usr/src/app; npm install
COPY . /usr/src/app

EXPOSE 8080
CMD ["npm", "start"]
