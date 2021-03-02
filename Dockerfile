FROM node:lts as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

COPY nginx ./nginx
COPY public ./public
COPY src ./src

COPY tsconfig.json .
COPY .eslintrc.js .


RUN npm ci
RUN npm run build

# Copy built assets to NGINX
FROM nginx:mainline-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/default.conf /etc/nginx/conf.d/default.conf
