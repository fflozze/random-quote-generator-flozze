# Générateur de Citations Flozze 💭

Une application moderne et élégante de génération de citations inspirantes, développée avec HTML, CSS et JavaScript. ⚡

## Description 📋

Ce projet est un générateur de citations qui affiche des citations inspirantes de manière aléatoire. L'application offre une interface utilisateur moderne avec des effets visuels élégants et une expérience utilisateur fluide. 🎨

## Fonctionnalités ✨

- Affichage de citations inspirantes aléatoires. 💭
- Interface utilisateur moderne et responsive. 🎨
- Design adaptatif pour tous les appareils. 📱
- Animations fluides lors du changement de citation. ✨
- Système de design cohérent avec variables CSS. 🎯
- Gestion modulaire du code JavaScript. 🔄

## Structure du Projet 📂

random-quote-generator-flozze/ \
│ \
├── css/ \
│ ├── citationGenerator.css : Fichier CSS principal pour les styles de l'application. 🎨 \
│ ├── root/ \
│ │ ├── color.css : Variables et constantes de couleurs. 🎨 \
│ │ └── font.css : Configuration des polices d'écriture. 🖌️ \
│ \
├── js/ \
│ ├── index.js : Point d'entrée principal de l'application. 📜 \
│ ├── data.js : Base de données des citations. 💾 \
│ └── random-index.js : Gestion de la sélection aléatoire. 🎲 \
│ \
├── index.html : Structure HTML principale de l'application. 📄 \
└── README.md : Documentation du projet. 📖

## Installation 🛠️

Pour exécuter ce projet localement, suivez ces étapes :

1. Clonez le dépôt sur votre machine locale :

   ```bash
   git clone https://github.com/flozze/random-quote-generator-flozze.git
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd random-quote-generator-flozze
   ```

3. Ouvrez le fichier index.html dans votre navigateur web préféré. 🌐

## Utilisation 💻

L'application est simple d'utilisation :
- Cliquez sur le bouton "Nouvelle citation" pour afficher une citation aléatoire
- Les citations sont sélectionnées de manière aléatoire dans la base de données
- L'interface s'adapte automatiquement à la taille de l'écran

## Design 🎨

L'application utilise plusieurs éléments de design pour une expérience visuelle optimale :

- **Police** : Helvetica pour une excellente lisibilité
- **Effets visuels** :
  - Ombres portées pour un effet de profondeur
  - Design épuré et minimaliste
  - Couleurs personnalisables via les variables CSS
  - Animations fluides sur les interactions

## Fonctionnalités Techniques 🔧

- Utilisation des modules ES6 pour une meilleure organisation du code
- Manipulation du DOM pour l'affichage dynamique
- Styles CSS modernes avec variables
- Organisation modulaire des fichiers CSS
- Gestion des événements utilisateur
- Système de sélection aléatoire optimisé

## Documentation 📖

La documentation du code est générée avec JSDoc. Pour générer la documentation, suivez ces étapes :

1. Installez JSDoc globalement si ce n'est pas déjà fait :

   ```bash
   npm install -g jsdoc
   ```

2. Générez la documentation en exécutant la commande suivante dans le répertoire du projet :

   ```bash
   jsdoc js/index.js js/data.js js/random-index.js
   ```

3. Ouvrez le fichier index.html dans le dossier out pour visualiser la documentation.

## Auteur 👨‍💻

**Flozze**
