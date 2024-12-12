#!/bin/bash

# Étape 1 : Construction du projet Angular
echo "Construction du projet Angular..."
ng build --configuration production


# Étape 2 : Arrêt et suppression de l'ancien conteneur
echo "Arrêt et suppression de l'ancien conteneur..."
docker stop my-angular-app 2>/dev/null || true
docker rm my-angular-app 2>/dev/null || true

# Étape 3 : Lancement du conteneur NGINX
echo "Lancement du nouveau conteneur NGINX..."
docker run --name my-angular-app -d -p 8080:80 \
    -v $(pwd)/dist/my-crud-app/browser:/usr/share/nginx/html \
    -v $(pwd)/nginx/default.conf:/etc/nginx/conf.d/default.conf \
    nginx

echo "Application déployée avec succès à http://localhost:8080"
