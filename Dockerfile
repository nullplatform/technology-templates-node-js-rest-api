FROM node:20-alpine
ARG GITHUB_TOKEN
ARG CI=true
ENV CI=$CI

WORKDIR /app
COPY package*.json .npmrc ./
RUN npm ci --omit=dev
COPY . .
RUN rm -rf ./src/test
CMD ["npm", "run", "start"]
