// Les photos de la mosaïque surf : des images tirées de la vidéo d'accueil (assets/photos/surf/mosaique)
// et deux photos de assets/photos/surf. Quatre rangées de quatre, dans l'ordre d'affichage.
import type { ImageMetadata } from 'astro';

const fichiers = import.meta.glob<{ default: ImageMetadata }>(
  ['../../assets/photos/surf/*.jpg', '../../assets/photos/surf/mosaique/*.jpg'],
  { eager: true },
);

const parNom = (nom: string) => {
  const cle = Object.keys(fichiers).find((k) => k.endsWith(`/${nom}.jpg`));
  if (!cle) throw new Error(`Photo surf introuvable : ${nom}`);
  return fichiers[cle].default;
};

const rangees: [string, string][][] = [
  [
    ['video-01', 'Trois silhouettes au bord de l’eau, soleil couchant et cargos au large.'],
    ['video-04', 'Un surfeur file sur une vague verte, la lèvre qui déferle derrière lui.'],
    ['video-03', 'Des mouettes en vol dans un ciel turquoise.'],
    ['video-21', 'Le soleil couchant se reflète sur la mer.'],
  ],
  [
    ['video-05', 'Un surfeur remonte dans l’écume blanche d’une vague.'],
    ['video-06', 'Silhouettes devant le van, portière ouverte, ciel orange.'],
    ['video-14', 'Un surfeur au bas d’une vague verte, l’écume qui jaillit.'],
    ['video-12', 'Un surfeur, planche sous le bras, face à l’océan.'],
  ],
  [
    ['video-15', 'Un surfeur en virage, la vague qui s’enroule.'],
    ['video-07', 'La mer sous un ciel orange, une vague qui casse.'],
    ['video-19', 'Un surfeur au cœur de l’écume d’une vague verte.'],
    ['video-10', 'Des surfeurs dans l’eau, lumière rasante sur la plage.'],
  ],
  [
    ['video-13', 'La côte et ses falaises, la mer calme au premier plan.'],
    ['video-17', 'Une vague qui déferle dans les embruns.'],
    ['surf-portrait', 'Un surfeur file sur une vague verte, l’écume dans son dos.'],
    ['video-20', 'Un surfeur au pied d’une vague qui explose.'],
  ],
];

export const photosSurf = rangees.map((r) => r.map(([nom, alt]) => ({ src: parNom(nom), alt })));
