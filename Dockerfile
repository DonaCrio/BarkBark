FROM node:10-alpine

WORKDIR /app

# Install node modules before copying files
# This way we avoid to re-install the node modules at every build
COPY package*.json /app/
RUN npm install --silent

# Building the app
COPY . /app
RUN npm run build:prod

# Entrypoint
CMD [ "npm", "start" ]