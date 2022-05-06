FROM node:17
ENV HELLO_HOSTNAME=127.0.0.1
ENV HELLO_PORT=3000
WORKDIR /workspace
COPY src/app.js app.js
CMD [ "node", "app.js" ]