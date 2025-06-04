# user-service/Dockerfile

# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /usr/src/app

# Copiamos sólo package.json y package-lock.json para cachear instalación
COPY package.json package-lock.json ./
RUN npm ci --production=false

# Copiamos el resto del código
COPY tsconfig.json ./
COPY src ./src
COPY docs ./docs

# Compilamos TypeScript a JS en dist/
RUN npm run build

# Stage 2: Runtime
FROM node:18-alpine
WORKDIR /usr/src/app

# Copiar lo necesario, código compilado y node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./

ENV NODE_ENV=production
EXPOSE 4000

# Ajustar según script de arranque
CMD ["npm", "start"]
