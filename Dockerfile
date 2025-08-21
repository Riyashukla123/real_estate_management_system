FROM node:24-alpine3.21 AS build

#build app


WORKDIR /app
COPY package.json .
RUN npm install
COPY  . .
RUN npm run build


#serve with Ngnix

FROM nginx:1.29.1-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
