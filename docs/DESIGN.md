# DESIGN — plan validé le 2026-09-23

Mood de référence : Deus Ex Machina (deuscustoms.com) — photo brute, typo condensée forte, ton décontracté.

## Couleurs
| Nom | Hex | Rôle |
|---|---|---|
| Chaux | #EFE7DA | fond principal (crème, papier photo) |
| Encre | #141414 | texte, blocs sombres, footer (noir) |
| Piste | #B49A7A | sable chaud, avatar, fonds de photo |
| Argan | #4A3F33 | brun, texte secondaire |
| Terre | #D2553C | bouton WhatsApp et carte Moto **uniquement** (terracotta des murs) |

## Typo
- **Archivo** (variable, axe largeur) — titres condensés Black ; texte courant en largeur normale.
- **DM Mono** — fiches techniques : prix, durée, niveau, inclus.

## Le truc mémorable
Hero coupé en deux : SURF | MOTO en lettres géantes, même taille, même poids.
Mobile : empilés. Desktop : 50/50. Chaque mot mène à sa section. Tout le reste calme.

Màj 2026-09-23 (validé par Antoine) : le hero est une vidéo plein écran avec seulement « Good Wave » + bouton WhatsApp.
Le split SURF | MOTO vient juste après, chaque panneau avec sa photo + grain.

## Règles
- Offres en fiches mono séparées par des filets fins, pas de cartes.
- Numérotation seulement dans « Comment ça marche ».
- Pas d'animation d'apparition, pas de label en capitales espacées, pas de mot en couleur dans un titre.

## Màj 2026-10-01 (validé par Antoine) — passage en petit site
Inspis : white-desert.com (grille de filets, onglet orange vertical), bo-house.com (carte au trait, cartes arrondies, épuré), sstr.tech (fiches techniques).

Pages : `/` accueil · `/surf` · `/moto` · `/auberge` · `/crews` (groupes, remise, partenariats).
Accueil : vidéo → SURF | MOTO → comment ça marche → l'auberge → bloc crews → infos (footer).

- **Coins arrondis** : un seul rayon `--radius` (20px) sur photos, fiches, blocs, boutons. Pas d'ombre.
- **Détails Deus** : tampon rond « Good Wave », pictos au trait (vague, moto, maison, crew). Avec parcimonie.
- **Carte des spots au trait** sur /surf (schéma, pas à l'échelle).
- **WhatsApp** : barre en bas sur mobile, onglet orange vertical à droite sur ordi, sur toutes les pages.
- Le split SURF | MOTO reste l'élément fort.

## Màj 2026-10-13 — palette chaude
Référence : photo d'un mur terracotta et de palmes, interface blanc cassé, photo arrondie à coins découpés.
Système emprunté à primal-instinct.net (deux tons, filets fins, mono discret), en moins sombre.
Chaux et encre réchauffées, « petit taxi » remplacé par « terre ». Arrondis de 20px conservés.
Contraste encre sur terre : 3,85:1 — réservé au texte gros et gras (bouton WhatsApp à 19px).

## Màj 2026-10-13 (2) — rouge, vert, bois brûlé
Deux couleurs : terracotta (mur) et bois brûlé japonais à la place du noir ; fond crème. Le vert palme, essayé le même jour, a été retiré : partout en bois brûlé.
Répartition : blocs sombres (Surf, carte des spots, Moto, footer, Crews) en bois brûlé ; Moto en terracotta.
Contrastes : bois brûlé sur crème 12,7:1, bois brûlé sur terracotta 3,8:1 (gros texte seulement).
Motifs repris des planches d'inspiration (validés par Antoine) :
- grain de pellicule sur toute la page (`body::after`, calque fixe) ;
- légendes en capitales posées sur les photos (`.legende`) : hero, Margot & Youness, Surf / Moto ;
- repères `[01]` (cartes Surf / Moto, fiches) et croix aux coins (`Reperes.astro`) : carte des spots, têtes de page ;
- fiches en ticket : aplat, perforation pointillée, encoche ronde de chaque côté (couleur crème : fond de page obligatoire).

## Màj 2026-10-13 (3) — retour au noir
Le bois brûlé est retiré : l'encre revient au noir d'origine #141414, partout. Terracotta et fond crème inchangés.
