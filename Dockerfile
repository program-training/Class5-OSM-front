
FROM node:18-alpine as builder
WORKDIR /app

COPY package\*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./src/nginx/default.conf /etc/nginx/conf.d/default.conf
ENV VITE_BASE_URL = http://a514084c400044f0990eda4eb528e51c-1130472949.eu-central-1.elb.amazonaws.com/oms/api
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
