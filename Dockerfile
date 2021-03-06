FROM java:7

RUN apt-get update && apt-get install -y nodejs npm nodejs-legacy

WORKDIR /opt
COPY app.js /opt/app.js
COPY src /opt/src
COPY package.json /opt/package.json
COPY config /opt/config

RUN npm install

CMD ["node", "/opt/app.js"]
