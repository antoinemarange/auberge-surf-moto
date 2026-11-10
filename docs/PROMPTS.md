# PROMPTS — à coller dans Claude Code, un par un

Ne passe au suivant que quand le précédent est validé.

---

### 1. Prise en main
```
Lis CLAUDE.md, docs/BRIEF.md et docs/CONTENU.md. Résume-moi le projet en 5 lignes, puis liste les infos manquantes qui bloquent vraiment le design (max 5). Ne code rien.
```

### 2. Analyse du site actuel
```
Voici l'URL du site actuel : [URL]. Liste ce qui manque ou ne marche pas par rapport à l'objectif (faire réserver surf et moto). Max 10 points, du plus au moins important. Ne code rien.
```

### 3. Plan design (étape 0)
```
Propose le plan design décrit dans CLAUDE.md (couleurs, typo, wireframes ASCII, élément mémorable). Base-toi sur les photos dans assets/photos. Puis critique ton propre plan et corrige ce qui fait générique. Ne code rien.
```

### 4. Initialisation
```
Initialise un projet Astro minimal dans ce dossier (sans template, sans framework CSS), avec une page index vide et un composant par section (6 sections). Donne-moi la commande pour lancer le serveur local.
```

### 5. Hero
```
Construis uniquement le hero, selon le plan validé. Mobile d'abord. Arrête-toi là.
```

### 6. Sections, une par une
```
Construis maintenant la section [Surf / Moto / Comment ça marche / Auberge / Infos pratiques]. Uniquement celle-là.
```

### 7. Passe finale
```
Relis toute la page : responsive, accessibilité, poids des images, cohérence des textes, bouton WhatsApp. Liste les corrections avant de les appliquer.
```

### 8. Mise en ligne
```
Prépare le repo pour GitHub et le déploiement Cloudflare Pages. Explique-moi les étapes, je les fais moi-même.
```
