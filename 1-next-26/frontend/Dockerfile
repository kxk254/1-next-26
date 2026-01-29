# Base Image ----------

FROM node:20-alpine AS base
WORKDIR /frontend

# Dependenciec ----
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci 

# Build ----------
FROM base AS builder
COPY --from=deps /frontend/node_modules ./node_modules 
COPY .  .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build 

# Production -----------
FROM node:18-alpine AS runner
WORKDIR /frontend 
ENV NODE_ENV=production 
ENV NEXT_TELEMETRY_DISABLED=1 

# COPY only the necessary files ----
COPY --from=builder /frontend/public ./public 
COPY --from=builder /frontend/.next ./.next/
COPY --from=builder /frontend/node_modules ./node_modules 
COPY --from=builder /frontend/package.json ./package.json 

EXPOSE 3000 
CMD ["npm", "start"]

