FROM node:23.6-slim

ENV API_ENDPOINT=mlserver
ENV MODEL_VERSION=v2
ENV PORT=5173
ENV HOST=0.0.0.0
EXPOSE 5173

WORKDIR /app/mlops-web

COPY build ./build

CMD ["node", "build/index.js"]
