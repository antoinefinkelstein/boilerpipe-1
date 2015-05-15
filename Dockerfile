FROM node:0.12.0

RUN apt-get update && apt-get install -y default-jdk

WORKDIR /opt
COPY app.js /opt/app.js

RUN npm install java boilerpipe express

CMD ["node", "/opt/app.js"]
