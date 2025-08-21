FROM node:24-alpine3.21

#build app


WORKDIR /app
COPY package.json .
RUN npm intsall
COPY  . .
RUN npm run build


#serve with Ngnix

FROM nginx:1.29.1-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=build /app/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off:"]
