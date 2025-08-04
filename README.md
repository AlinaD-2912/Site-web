# StraySpawn 🐱
**StraySpawn** est un site interactif dédié à l’actualité des jeux vidéo et à la découverte artistique. Il combine des données dynamiques, des animations et des interactions en temps réel, le tout généré principalement en JavaScript.


## Objectif du projet
Créer un site web 100 % dynamique avec JavaScript, sans frameworks, dans un objectif pédagogique. L’accent est mis sur la manipulation du DOM, les appels API via fetch(), la gestion d’événements, et la création d’interfaces utilisateur réactives.
## Pages du site
- **Accueil – Actualités jeux vidéo** :
  - Cartes générées dynamiquement via JavaScript à partir de données API JSON.

  - Deux moyens d’actualiser la liste des jeux :

    - Via un bouton "Actualiser" (mise à jour partielle, sans recharger la page)

    - Ou en rechargeant la page (récupération automatique)

  - Formulaire (en haut à gauche) permettant à l’utilisateur d’ajouter ses propres articles, avec image, nom du jeu et description.
  - L'article est affiché immédiatement dans la liste.
- **Gallery** :
  - Bannière défilante automatique toutes les 4–5 secondes présentant des musées célèbres.

  - Section “Femmes dans l'art” avec tableaux célèbres (ex. Mona Lisa…).

  - Boutons de manipulation d’affichage :

      - Vue en mosaïque

      - Vue en colonne

  - Ajout d’images personnalisées à la galerie (upload utilisateur)
- **Jeux** :
  - Prototype d’un jeu de mémoire :
L’utilisateur doit retrouver les paires d’images identiques après les avoir mémorisées rapidement avant qu’elles ne se cachent.

  - L’objectif est de stimuler la mémoire visuelle avec une mécanique simple mais fun (semblable au jeu Memory).
## Site en ligne
[Accéder au site](https://alinad-2912.github.io/StraySpawn-web-site/)
## Technologies utilisées
- HTML
- CSS
- JavaScript 
## Comment utiliser
Pour visualiser le site en ligne, cliquez simplement sur le lien ci-dessus. 
Pour l’exécuter en local :
```bash
git clone https://github.com/alinad-2912/StraySpawn-web-site.io.git
cd StraySpawn-web-site.io
Ouvrez le fichier index.html dans votre navigateur
