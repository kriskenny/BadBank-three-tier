# syntax=docker/dockerfile:1
FROM node:14.17.6
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .
##
RUN rmp run build
COPY entrypoint.sh /entrypoint.sh
RUN ["chmod", "+x", "/entrypoint.sh"]
ENTRYPOINT [ "/entrypoint.sh" ]
EXPOSE 3000
##
CMD [ "npm", "start" ]