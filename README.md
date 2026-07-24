# ShopBoard

SPA de gestion de produits e-commerce développée avec Angular 20+.
TP réalisé par Djimouna Badji — EPF Africa.

## Prérequis

- Node.js v20.19+ / v22.12+ / v24+
- npm v10+
- Angular CLI v20

## Installation

```bash
git clone https://github.com/djim97/shopboard-djimouna-badji.git
cd shopboard-djimouna-badji
npm install
```

## Lancement

L'application nécessite **deux terminaux** :

**Terminal 1 — API mock (JSON Server) :**
```bash
npx json-server --watch db.json --port 3000
```

**Terminal 2 — Application Angular :**
```bash
ng serve -o
```

L'application est disponible sur http://localhost:4200
L'API mock est disponible sur http://localhost:3000

## Fonctionnalités

- Composants standalone (OnPush) + data binding
- Services + HttpClient + gestion d'erreurs
- DTO / ViewModel / mapper + génériques typés
- Panier réactif avec Signals (computed, effect, localStorage)
- Routing avec lazy loading + guard fonctionnel
- Formulaires réactifs + CRUD complet + intercepteurs HTTP
