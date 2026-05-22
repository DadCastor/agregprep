# AgrégPrep — Physique-Chimie Interne 2027

Site de préparation à l'agrégation interne de physique-chimie, session 2027.

## Contenu

12 chapitres couvrant l'intégralité du programme officiel :

**Physique**
- Mécanique & Dynamique newtonienne
- Électromagnétisme & Ondes EM
- Thermodynamique
- Optique, Ondes & Signal
- Électricité & Conversion
- Physique moderne

**Chimie**
- Chimie des solutions
- Thermodynamique chimique
- Électrochimie
- Cinétique & Catalyse
- Chimie organique
- Structure de la matière

Chaque chapitre contient 13 sections : cours rigoureux, démonstrations, exercices résolus type concours, propositions de leçons pour l'oral, montages expérimentaux, pièges du jury, quiz.

## Technologie

Site statique pur : HTML5 + CSS3 + JavaScript vanilla. Aucune dépendance back-end.

- Typographie mathématique : [MathJax 3](https://www.mathjax.org/) via CDN
- Polices : Google Fonts (DM Serif Display, DM Sans, JetBrains Mono)
- Persistance : localStorage (tracker de progression)

## Développement local

Ouvrir `index.html` directement dans le navigateur. Aucun serveur requis.

## Déploiement

Hébergé sur [Netlify](https://netlify.com). Chaque `git push` sur `main` déclenche un déploiement automatique.

## Variables d'environnement

Pour les futures fonctionnalités nécessitant des clés API :
1. Copier `.env.example` en `.env`
2. Remplir les valeurs dans `.env`
3. Ne **jamais** commiter `.env` (il est exclu par `.gitignore`)
4. Ajouter les variables dans le dashboard Netlify : Site settings → Environment variables

## Sources

- [agregation-interne-physique-chimie.org](http://www.agregation-interne-physique-chimie.org)
- [devenirenseignant.gouv.fr](https://www.devenirenseignant.gouv.fr)
