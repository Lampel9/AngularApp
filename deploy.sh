#!/bin/bash

# Supprimer tout conteneur existant avec le même nom
docker rm -f my-angular-app

# Lancer un nouveau conteneur
docker run --name my-angular-app -d -p 8080:80 \
    -v $(pwd)/dist/my-crud-app/browser:/usr/share/nginx/html \
    -v $(pwd)/nginx/default.conf:/etc/nginx/conf.d/default.conf \
    nginx
