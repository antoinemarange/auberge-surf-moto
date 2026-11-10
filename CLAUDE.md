# CLAUDE.md — Site one-pager [NOM DE L'AUBERGE]

Tu travailles avec Antoine (web designer / vidéaste freelance) sur la refonte du site d'une auberge au Maroc.
Lis ce fichier en entier, puis `docs/BRIEF.md` et `docs/CONTENU.md` avant toute action.

## Le contexte business (à ne jamais perdre de vue)

- Le revenu principal visé = **les activités surf et moto**. L'auberge est un **complément**.
- Les clients moto dorment ailleurs (autre hôtel) et **c'est voulu** : on ne cherche PAS à les faire dormir sur place.
- Le site vend donc les activités à des gens **qui logent n'importe où** dans la zone. L'hébergement n'est proposé qu'en bonus.
- Hiérarchie du site : **Surf = Moto** (deux axes égaux) → **Auberge** (en +).

## L'objectif du site

Une seule page qui fait une seule chose : **faire réserver une session surf ou une sortie moto**, le plus souvent via WhatsApp.
Tout ce qui ne sert pas cet objectif sort de la page.

## Stack

- Astro (dernière version stable). Petit site depuis le 2026-10-01 : accueil + /surf, /moto, /auberge, /crews (voir docs/DESIGN.md).
- CSS maison dans les composants Astro, pas de framework CSS, pas de JS inutile.
- Images optimisées via `astro:assets`, sources dans `assets/photos/`.
- Déploiement prévu : GitHub → Cloudflare Pages.
- Langue : FR d'abord, structure prête pour une version EN (clientèle internationale).

## Structure de la page (proposition de départ, à valider)

1. **Hero** — les deux activités visibles immédiatement, surf ET moto. Bouton WhatsApp.
2. **Surf** — offres, niveaux, durée, prix, ce qui est inclus.
3. **Moto** — sorties / circuits, durée, niveau requis, prix, inclus (moto, équipement, guide, pick-up hôtel ?).
4. **Comment ça marche** — réserver → on vient vous chercher → vous roulez / surfez. (Vraie séquence : ici une numérotation a du sens.)
5. **L'auberge, en +** — courte, pour ceux qui veulent dormir sur place.
6. **Infos pratiques + contact** — localisation, carte, WhatsApp, Instagram, horaires.

## Règles de travail

- **Une étape à la fois.** Tu ne passes à la suivante que quand Antoine valide. Pas de gros bloc de code non demandé.
- **Pas de code avant le plan design validé** (voir ci-dessous).
- Quand une info manque dans le BRIEF, mets un placeholder visible `[À COMPLÉTER : ...]`. N'invente jamais un prix, un horaire ou une adresse.
- Réponses courtes, en français, directes.

## Direction artistique — étape 0 obligatoire

Avant de coder, propose un plan design compact :
- **Couleurs** : 4 à 6 valeurs hex nommées, tirées du lieu réel (océan, sable, terre, lumière, poussière de piste…) et des photos dans `assets/`.
- **Typo** : 1 ou 2 familles choisies pour CE projet, avec leur rôle.
- **Layout** : wireframe ASCII du hero et de 2 sections.
- **Le truc mémorable** : UN seul élément fort. Tout le reste calme.

Puis relis ton plan et élimine ce qui ressemble à un site de surf camp générique ou à un template :
- pas de fond crème + serif + accent terracotta par défaut,
- pas de cartes arrondies identiques avec ombre grise partout,
- pas de label en capitales espacées au-dessus de chaque titre,
- pas de « 01 / 02 / 03 » sauf pour une vraie séquence,
- pas d'animation d'apparition sur chaque section,
- pas de mot mis en italique ou en couleur dans un titre.

## Qualité minimale (sans l'annoncer)

Mobile d'abord (les clients réservent depuis leur téléphone) · bouton WhatsApp toujours accessible · focus clavier visible · `prefers-reduced-motion` respecté · images légères · textes en phrases simples, voix active.
