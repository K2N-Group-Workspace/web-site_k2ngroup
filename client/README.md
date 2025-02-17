Étape 3 : Documentation pour héberger LibreTranslate

Voici une documentation simple pour héberger LibreTranslate sur ton serveur.
Prérequis

    Avoir Docker et Docker Compose installés.

    Avoir un serveur (local ou distant) avec accès à un terminal.

Étapes

    Cloner le dépôt ou créer les fichiers :

        Si tu as un dépôt Git, clone-le sur ton serveur.

        Sinon, crée les fichiers Dockerfile et docker-compose.yml directement sur ton serveur.

    Construire et démarrer le conteneur :
    bash
    Copy

    docker-compose up --build

    Accéder à LibreTranslate :

        Une fois démarré, LibreTranslate sera accessible à l'adresse http://localhost:5000 (ou l'adresse IP de ton serveur).

    Utiliser LibreTranslate dans ton application :

        Modifie l'URL dans la fonction translateText pour pointer vers ton serveur :
        
        const response = await fetch("http://TON_SERVEUR_IP:5000/translate", {
          // ...
        });

    Gérer les clés API (optionnel) :

        Si tu as activé LT_API_KEYS=true, tu peux générer des clés API pour limiter l'accès à ton instance.

        Utilise l'endpoint /keys pour gérer les clés.

    Persister les données (optionnel) :

        Le volume ./data:/app/data dans docker-compose.yml permet de sauvegarder les modèles de traduction et les clés API.