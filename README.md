# READ ME!!!!

C'est le projet pour l'entretien le 06 fevrier 2026
Créé par : Sebastian Ruiz Zuluaga
Version : 1.0.0

Platform de visualisation des données de bateaux.</br>
----------------------
<b>Backend:</b> avec Node.js, Express.js et PostgresSQL.</br>
----------------------
<b>Frontend:</b> avec React.js, TailwindCSS et Chart.js.</br>
----------------------

J'ai cree un fichier <b>Python</b> pour simuler des données de bateaux.

J'ai utilise Node.js pour creer le backend et Express.js pour creer le serveur avec les routes pour les requetes GET, POST, PUT et DELETE. (REST APIs)</br>
J'ai utilise PostgresSQL pour stocker les données des bateaux.</br>

J'ai utilise React.js pour creer le frontend et TailwindCSS pour creer le design.</br>
J'ai utilise Chart.js pour creer les graphiques.</br>

----------------------
# ENDPOINTS

<b>Disclaimer:</b> le mot de passe est en clair pour l'instant, il faudra le crypter.

- Users:

GET {
    /users
    /users/:id
}

POST {
    /users
    {
        "name": "John Doe",
        "email": "[EMAIL_ADDRESS]",
        "password_hash": "password"
    }
}

PUT {
    /users/:id
    {
        "name": "John Doe",
        "email": "[EMAIL_ADDRESS]",
        "password_hash": "password"
    }
}

DELETE {
    /users/:id
}

