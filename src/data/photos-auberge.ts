// Les photos de l'auberge (assets/photos/auberge), dans l'ordre d'affichage, avec leur texte alternatif.
import type { ImageMetadata } from 'astro';

const fichiers = import.meta.glob<{ default: ImageMetadata }>(
  '../../assets/photos/auberge/*.jpg',
  { eager: true },
);

const liste: [string, string][] = [
  ['chambre-ouverte-salon', "Chambre double ouverte sur le salon rayé, palme séchée au mur et fenêtre sur l'océan."],
  ['vue-rooftop', "Vue depuis le rooftop sur les toits de Tamraght, les collines et l'océan."],
  ['salon-berbere', 'Le salon berbère : arches sculptées, banquettes bleues, carrelage en damier et planche de surf au mur.'],
  ['double-vue-mer', "Chambre double, grandes fenêtres et vue sur l'océan."],
  ['salon-table', 'Le grand salon : banquettes rayées et longue table en bois, fenêtres sur la mer.'],
  ['escalier-planches', "L'entrée, ses planches de surf alignées et l'escalier aux rambardes turquoise."],
  ['double-deluxe', 'Chambre double deluxe, lit en bois et rideaux en lin.'],
  ['grande-table', 'La grande table en bois, sous le plafond sculpté.'],
  ['salon-arches', 'Salon aux arches et colonnes torsadées, banquettes et tapis berbère.'],
  ['fenetre-mer', "Rideau en lin et fer forgé bleu, l'océan derrière la fenêtre."],
  ['double-baie-mer', "Chambre double, grande baie vitrée sur les toits et l'océan."],
  ['dortoir', 'Un dortoir avec lits superposés en bois.'],
  ['banquette-vue', 'Une banquette au soleil devant une grande baie vitrée, cactus et vue sur les toits.'],
  ['chambre-twin', 'Chambre twin, deux lits simples et serviettes pliées.'],
  ['escalier-spirale', "L'escalier en colimaçon vu d'en haut, rambarde turquoise et carreaux noirs."],
  ['double-salon', 'Chambre double ouverte sur un salon aux banquettes rayées.'],
  ['salon-planche', 'Le salon berbère vu depuis l\'entrée, une planche de surf au premier plan.'],
  ['double-deux-fenetres', 'Chambre double avec deux fenêtres, suspension en osier et vue sur la ville.'],
  ['dortoir-fenetre', 'Dortoir aux lits superposés en bois, fenêtre et rideau berbère.'],
  ['salon-etagere', 'Le salon et ses étagères, colonnes torsadées et porte en bois sculpté.'],
  ['chambre-twin-soleil', 'Chambre twin lumineuse, deux lits simples et étagères en bois.'],
  ['dortoir-armoire', 'Dortoir aux lits superposés autour d\'une grande armoire en bois.'],
  ['escalier-chapeaux', "La cage d'escalier, chapeaux de paille au mur et cactus en pot."],
  ['chambre-porte-rouge', 'Chambre aux deux lits simples, porte rouge ouverte sur la terrasse.'],
  ['dortoir-rideau', 'Dortoir, lits superposés et rideau bleu à la fenêtre.'],
  ['salle-de-bain', 'Salle de bain aux carreaux bleus, vue depuis le couloir.'],
];

export const photosAuberge = liste.map(([nom, alt]) => {
  const fichier = fichiers[`../../assets/photos/auberge/${nom}.jpg`];
  if (!fichier) throw new Error(`Photo introuvable : ${nom}.jpg`);
  return { src: fichier.default, alt };
});
