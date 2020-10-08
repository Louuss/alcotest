FROM node:lts-alpine

# définit le dossier 'app' comme dossier de travail
WORKDIR /src

# copie 'package.json' et 'package-lock.json' (si disponible)
COPY package*.json ./

# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY . .

# installe les dépendances du projet
RUN npm install


EXPOSE 8080
CMD [ "npm", "run", "serve" ]