# AzureAI Project
Cette application détecte les visages dans une image ou une vidéo et reconnait les emotions telles que la joie, la tristesse, la colère.
Elle utilise des modèles pré-entraînés pour la détection des visages et des réseaux de neurones convolutifs pour la classification des émotions.

## Table de Matieres

- [Prérequis](#prérequis)
- [Fonctionnalités](#fonctionnalités)
- [Technologies](#technologies)
- [Installation](#installation)
- [Dépendances](#dépendances)
- [Utilisation](#utilisation)
- [Auteurs](#auteurs)

## Prérequis

Avant d'installer et d'exécuter ce projet, assurez-vous d'avoir les éléments suivants :

- **Node.js** (version 12.0 ou supérieure)
- **npm** (généralement installé avec Node.js)
- Un **compte Azure** avec un service Azure AI Vision configuré
- Une **caméra web** fonctionnelle sur votre ordinateur


## Fonctionnalités
- Détection des visages dans les images et vidéos.
- Reconnaissance des émotions: bohneur, tristesse, colère.
- Interface utilisateur simple.

## Technologies
- **Langages**: HTML, CSS, JavaScript
- **Frameworks**: Bootstrap
- **Modèle pré-entraînés**: Azure Vision

## Arborescence
```
AzureAIproject/
│
├── assets/
│   └── images/
│       └── logo.png
│
├── config/
│   └── .env
|
├── controllers/
│   └── faceDetectionController.js
│
├── public/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── script.js
│
├── views/
│   ├── apropos.html
│   ├── application.html
│   └── index.html
│
├
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

## Installation

Suivez ces étapes pour installer et configurer le projet :

1. Clonez ce dépôt sur votre machine locale :
   ```bash
   https://github.com/ClemEsaipProject/AzureAIproject.git
   ```

2. Naviguez dans le répertoire du projet :
   ```bash
   cd detecteur-emotions
   ```

3. Installez les dépendances nécessaires :
   ```bash
   npm install express @azure/cognitiveservices-computervision @azure/ms-rest-js dotenv
   ```

4. Créez un fichier `.env` à la racine du projet et ajoutez vos informations d'identification Azure :
   ```bash
   touch .env
   ```
   Puis ouvrez le fichier et ajoutez :
   ```
   AZURE_COMPUTER_VISION_ENDPOINT=votre_endpoint
   AZURE_COMPUTER_VISION_KEY=votre_clé
   ```

5. Lancez le serveur :
   ```bash
   node server.js
   ```

6. Ouvrez votre navigateur et accédez à `http://localhost:3000`

## Dépendances

Ce projet utilise les dépendances principales suivantes :

- **express**: ^4.17.1
- **@azure/cognitiveservices-computervision**: ^8.2.0
- **@azure/ms-rest-js**: ^2.6.0
- **dotenv**: ^10.0.0

Pour une liste complète des dépendances, veuillez consulter le fichier `package.json`.
    
## Utilisation
Instructions sur la façon d'utiliser l'application.
1. Executer le projet.
2. rendez-vous à la page application puis lancer votre camera et appuyer sur le bouton pour ananlyser 

## Auteurs
- Clément WAHAGA
- Daniel ETEME
- Joyce KAMGANG
- Melvine MEYOGHE
