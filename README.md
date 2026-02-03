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

* J'ai cree un fichier <b>Python</b> pour simuler des données de bateaux qui s'appelle <b>simulator.py</b> et qui envoie des requetes POST a l'API.

* J'ai utilise <b>Node.js</b> pour creer le backend et <b>Express.js</b> pour creer le serveur avec les routes pour les requetes GET, POST, PUT et DELETE. (REST APIs)</br>
* <b>PostgresSQL</b> pour stocker les données des bateaux et des utilisateurs.</br>

* J'ai utilise <b>React.js</b> pour creer le frontend et <b>TailwindCSS</b> pour creer le design et <b>Chart.js</b> pour creer les graphiques.</br>

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
        "name": "John Doe",</br>
        "email": "[EMAIL_ADDRESS]",</br>
        "password_hash": "password"</br>
    }
}

PUT {
    /users/:id
    {
        "name": "John Doe",</br>
        "email": "[EMAIL_ADDRESS]",</br>
        "password_hash": "password"</br>
    }
}

DELETE {
    /users/:id
}

