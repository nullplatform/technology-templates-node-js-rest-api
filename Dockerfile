FROM node:20-alpine AS builder
ARG GITHUB_TOKEN

WORKDIR /app
COPY package*.json .npmrc ./
RUN npm install
COPY . .
RUN npm test
RUN rm -rf ./src/test

FROM node:20-alpine
ARG GITHUB_TOKEN
ARG CI=true
ENV CI=$CI

WORKDIR /app
COPY package*.json .npmrc ./
RUN npm ci --omit=dev
COPY --from=builder /app .
CMD ["npm", "run", "start"]
