FROM node:16.14

WORKDIR /app

COPY . .

RUN npm install

RUN apt-get update && apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

RUN npx cypress install --version 11.2.0

CMD ["npm", "start"]
