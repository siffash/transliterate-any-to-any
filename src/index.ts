export { transliterate } from "./transliterate";
export { scripts, languages } from "helpers/constants";
export { confirmLanguageByScript } from "helpers/confirmLanguageByScript";
export { type Script, type Language } from "./types";

// *** EXPERIMENTS ***

import { transliterate } from "./transliterate";
import { frIpa } from "converters/fr/fr-ipa";
const test = async () => {
  console.log(
    await frIpa(
      "Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Montpellier, Strasbourg, Nantes, Rennes, Grenoble, Rouen, Toulon, Dijon, Nîmes, Angers, Villeurbanne, Clermont-Ferrand, Besançon, Orléans, Jean Pierre Dupont, Marie Louise Martin, Pierre Antoine Bernard, Sophie Claire Thomas, Nicolas François Robert, Isabelle Anne Richard, Julien Émile Petit, Camille Élise Durand, Antoine Louis Leroy, Charlotte Marie Moreau, Maxime Henri Simon, Élodie Jeanne Laurent, Lucas Paul Michel, Amélie Rose Garcia, Thomas Charles David, Chloé Juliette Bertin, Alexandre René Roux, Manon Lucile Vincent, Guillaume Jacques Fournier, Pauline Marguerite Morel, L'Oréal, Danone, Michelin, Renault, Peugeot, Carrefour, Auchan, Decathlon, Bouygues, Hermès, Chanel, Christian Dior, Thales, Safran, Alstom, Orange, Lactalis, Vinci, Clarins, Cartier",
    ),
  );
  console.log(
    await transliterate(
      "Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Montpellier, Strasbourg, Nantes, Rennes, Grenoble, Rouen, Toulon, Dijon, Nîmes, Angers, Villeurbanne, Clermont-Ferrand, Besançon, Orléans, Jean Pierre Dupont, Marie Louise Martin, Pierre Antoine Bernard, Sophie Claire Thomas, Nicolas François Robert, Isabelle Anne Richard, Julien Émile Petit, Camille Élise Durand, Antoine Louis Leroy, Charlotte Marie Moreau, Maxime Henri Simon, Élodie Jeanne Laurent, Lucas Paul Michel, Amélie Rose Garcia, Thomas Charles David, Chloé Juliette Bertin, Alexandre René Roux, Manon Lucile Vincent, Guillaume Jacques Fournier, Pauline Marguerite Morel, L'Oréal, Danone, Michelin, Renault, Peugeot, Carrefour, Auchan, Decathlon, Bouygues, Hermès, Chanel, Christian Dior, Thales, Safran, Alstom, Orange, Lactalis, Vinci, Clarins, Cartier",
      { from: "fr", to: "ru" },
    ),
  );
};
test();
