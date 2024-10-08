FROM node:lts AS node

WORKDIR /app

COPY . /app/

RUN npm install
RUN npm run build

FROM nginx AS nginx

COPY .docker/nginx-vhosts.conf /etc/nginx/nginx.conf

COPY --from=node /app/dist/ /usr/share/nginx/html

EXPOSE 80
