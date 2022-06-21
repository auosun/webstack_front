FROM node:13.12.0-alpine
WORKDIR /app/frontend

COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 3000