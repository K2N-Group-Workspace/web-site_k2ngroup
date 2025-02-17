# Dockerfile pour une application Node.js avec TypeScript
FROM node:20-alpine As builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN yarn install --frozen-lockfile

# Copier le reste du code
COPY . .

# Compiler le code TypeScript (si nécessaire)
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# Exposer le port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "dist/app.js", "libretranslate"]