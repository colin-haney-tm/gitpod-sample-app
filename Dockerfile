FROM node:17
WORKDIR /workspace
COPY src/main.js main.js
CMD [ "node", "main.js" ]