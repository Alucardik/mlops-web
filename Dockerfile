FROM node:23.6-slim

WORKDIR /app/mlops-web

COPY build ./build

CMD ["node", "build/index.js"]
