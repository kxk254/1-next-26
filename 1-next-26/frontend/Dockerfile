# Base Image ----------

FROM node:20.9-alpine
WORKDIR /frontend
ENV NEXT_TELEMETRY_DISABLED=1

COPY package*.json ./
RUN npm install 

COPY .  .
RUN npm run build 

ENV NODE_ENV=production 

EXPOSE 3000 
CMD ["npm", "start"]

