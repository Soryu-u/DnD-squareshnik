FROM node AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS prod
COPY ./nginx/react.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]