FROM node:16-alpine AS production

WORKDIR /usr/src/capsy

COPY --chown=node:node package*.json ./
COPY --chown=node:node --from=development /usr/src/capsy/node_modules ./node_modules
COPY --chown=node:node . .
RUN npm run build
ENV NODE_ENV production
RUN npm ci --only=production && npm cache clean --force
USER node

COPY --chown=node:node --from=build /usr/src/capsy/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/capsy/dist ./dist

CMD [ "node", "dist/main.js" ]