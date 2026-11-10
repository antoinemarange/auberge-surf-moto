// Les photos de la mosaïque moto : celles du site taghazoutendurohorizon.com (assets/photos/moto/site),
// des captures de leur vidéo et deux recadrages (assets/photos/moto/video), et les deux de assets/photos/moto.
// Quatre rangées de quatre, dans l'ordre d'affichage.
import type { ImageMetadata } from 'astro';

const fichiers = import.meta.glob<{ default: ImageMetadata }>(
  ['../../assets/photos/moto/*.{jpg,JPG}', '../../assets/photos/moto/{site,video}/*.jpg'],
  { eager: true },
);

const parNom = (nom: string) => {
  const cle = Object.keys(fichiers).find((k) => /\/([^/]+)\.(jpg|JPG)$/.exec(k)?.[1] === nom);
  if (!cle) throw new Error(`Photo moto introuvable : ${nom}`);
  return fichiers[cle].default;
};

const rangees: [string, string][][] = [
  [
    ['dunes-groupe', 'Trois pilotes en KTM dans les dunes, des traces dans le sable.'],
    ['IMG_9650', 'Un pilote sur une KTM enduro orange devant une maison aux portes bleues.'],
    ['equipe-dromadaire', 'Quatre pilotes en tenue, motos derrière eux, à côté d’un dromadaire.'],
    ['falaise-ocean', 'Pilotes arrêtés en haut d’une dune, l’océan en contrebas.'],
  ],
  [
    ['capture-01', 'Quatre pilotes qui démarrent dans le sable, la poussière derrière les roues.'],
    ['capture-02', 'La plage vue du ciel, des traces de pneus jusqu’aux vagues.'],
    ['zoom-ktm', 'Une KTM orange garée dans le sable, le casque posé sur le guidon.'],
    ['capture-04', 'Vue du ciel : quatre motos tracent des boucles dans le sable.'],
  ],
  [
    ['capture-03', 'Des pilotes sur une grande plage, vus du ciel, au bord des vagues.'],
    ['moto-silhouette', 'Silhouette d’un pilote à moto sur une dune rouge.'],
    ['capture-05', 'Une file de motos traverse une plaine de sable et de buissons.'],
    ['zoom-dromadaire', 'Un dromadaire à côté de trois pilotes en tenue.'],
  ],
  [
    ['pilotes-depart', 'Pilotes casqués alignés sur leurs KTM, prêts à partir.'],
    ['dunes-ocean', 'Motos qui filent entre les buissons, l’océan à l’horizon.'],
    ['capture-06', 'Deux pilotes lancés sur une piste entre les herbes des dunes.'],
    ['motos-pause', 'Pause sur la piste : KTM posées dans le sable, un homme en djellaba.'],
  ],
];

export const photosMoto = rangees.map((r) => r.map(([nom, alt]) => ({ src: parNom(nom), alt })));
