FROM node:lts-alpine

WORKDIR /src

# copie 'package.json' et 'package-lock.json' (si disponible)
COPY package*.json ./

# copie les fichiers et dossiers du projet dans le dossier de travail (par exemple : le dossier 'app')
COPY . .

# installe les dépendances du projet
RUN npm install


EXPOSE 5000
CMD [ "npm", "run", "dev" ]