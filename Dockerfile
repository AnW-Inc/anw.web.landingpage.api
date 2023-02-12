FROM node:14-alpine
WORKDIR /anw_landingpage_CMS
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

EXPOSE 80
CMD ["yarn", "start"]
# CMD ["yarn", "develop"]
