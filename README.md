# 🦸‍♂️ Agenda Super-Héros

Un agenda interactif de missions pour super-héros développé en React et SCSS, avec un design inspiré des bandes dessinées et comics.

## 🎯 Fonctionnalités

- **Agenda hebdomadaire** : Vue du lundi au dimanche avec 1-3 missions par jour
- **Cartes de missions** : Design BD avec informations complètes
- **Super-héros** : 15 héros uniques avec pouvoirs et faiblesses
- **Types de missions** : Urgent (rouge), Facile (vert), Collaborative (bleu)
- **Système de points** : Points d'héroïsme pour chaque mission accomplie
- **Génération aléatoire** : Nouvel agenda à chaque clic
- **Détails interactifs** : Modal avec informations complètes
- **Design responsive** : Adapté mobile et desktop

## 🚀 Installation

1. **Cloner le projet**
```bash
git clone [url-du-repo]
cd agenda-super-heros
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer l'application**
```bash
npm start
```

L'application sera accessible sur `http://localhost:3000`

## 🎨 Design

- **Thème Comics** : Couleurs vives, polices "Bangers" et "Comic Neue"
- **Animations** : Effets de survol, transitions fluides
- **Cartes stylisées** : Bordures noires, ombres, bulles de BD
- **Responsive** : Grille adaptative selon la taille d'écran

## 🦸‍♂️ Super-Héros Disponibles

- **Captain Async** - Contrôle du multithreading
- **Debug Woman** - Vision X-Ray des bugs  
- **Code Crusher** - Force brute de compilation
- **API Guardian** - Protection des endpoints
- **Database Dynamo** - Maîtrise des requêtes SQL
- **Frontend Flash** - Vitesse de rendu ultra-rapide
- **Backend Beast** - Résistance aux surcharges serveur
- **Security Sentinel** - Détection des vulnérabilités
- **DevOps Destroyer** - Automatisation des déploiements
- **UI/UX Unicorn** - Design intuitif instantané
- **Test Titan** - Couverture de code à 100%
- **Performance Phantom** - Optimisation invisible
- **Git Guardian** - Maîtrise des branches
- **Cloud Commander** - Contrôle des infrastructures
- **Mobile Marvel** - Adaptabilité multi-plateforme

## 🎮 Utilisation

1. **Consulter l'agenda** : Vue d'ensemble de la semaine
2. **Cliquer sur une mission** : Voir les détails complets
3. **Marquer comme terminée** : Bouton ⭕/✅ sur chaque carte
4. **Générer un nouvel agenda** : Bouton "🎲 Nouvel Agenda"
5. **Suivre les points** : Compteur en haut à droite

## 🛠️ Technologies

- **React 18** : Framework JavaScript
- **SCSS** : Préprocesseur CSS
- **Fonts** : Google Fonts (Bangers, Comic Neue)
- **Responsive Design** : CSS Grid et Flexbox
- **Animations** : CSS Keyframes

## 📱 Responsive

- **Desktop** : Grille 7 colonnes (un jour par colonne)
- **Tablet** : Grille 4 colonnes
- **Mobile** : Grille 2 colonnes ou 1 colonne
- **Adaptations** : Tailles de police, espacements, modales

## 🎨 Personnalisation

Les couleurs et styles peuvent être modifiés dans `src/index.scss` :

```scss
:root {
  --comic-red: #FF0000;
  --comic-blue: #0066CC;
  --comic-yellow: #FFD700;
  // ...
}
```

## 📝 Structure du Projet

```
src/
├── components/
│   ├── WeeklyAgenda.js/scss
│   ├── MissionCard.js/scss
│   └── MissionDetails.js/scss
├── data/
│   ├── heroes.js
│   └── missions.js
├── App.js/scss
├── index.js/scss
└── README.md
```

## 🚀 Déploiement

```bash
npm run build
```

Les fichiers de production seront dans le dossier `build/`.

---

**Développé avec ❤️ et beaucoup de café ☕**
