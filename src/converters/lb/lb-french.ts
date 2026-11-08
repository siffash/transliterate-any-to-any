import { languages } from "helpers/constants";

// Many Luxembourg names are French. The lb map lists the common ones (Jean, Thérèse); a word missing from it that
// ends like a French name (Etienne, Léonie, Auguste, Fournelle, Margue) is read as French too, since the lb rules
// would give it a final ə (Этиенне, エティアナ). -ele is Luxembourgish (Ottele), and French rules misread oy before a
// consonant (Aloyse)
const FRENCH_ENDING = /(?:[bcdfgjklmnpqrstvxzç]e|[gq]ue|ie)$/u;
const NATIVE = /ele$|oy[^aeiou]/u;

/**
 * The French IPA of the text's French words, keyed the way the lb exception lookups are (NFC, lowercase).
 * @param texts - The texts being converted.
 * @param map - The lb map; its words are French too, and are included only when `withMap` is set.
 * @param frenchIpa - Converts French words to IPA.
 * @param withMap - Whether to include the map words (a target that reads French words its own way).
 */
export const lbFrenchIpa = async (
  texts: string[],
  map: Record<string, string>,
  frenchIpa: (words: string[]) => Promise<string[]>,
  withMap = false,
): Promise<Record<string, string>> => {
  const words = new Set<string>();
  for (const text of texts) {
    for (const [match] of text.matchAll(new RegExp(`[${languages.lb.regex}\\p{L}]+`, "gu"))) {
      // The lookups also try the word behind an elided article (d'Etienne), which stays Luxembourgish
      const elided = /^\p{L}{1,2}['’]/u.exec(match)?.[0] ?? "";
      for (const word of elided ? [match, match.slice(elided.length)] : [match]) {
        const key = word.normalize("NFC").toLocaleLowerCase("lb");
        const inMap = Object.prototype.hasOwnProperty.call(map, key);
        const french =
          word !== match || !elided ? FRENCH_ENDING.test(key) && !NATIVE.test(key) : false;
        if (inMap ? withMap : french) words.add(key);
      }
    }
  }
  if (!words.size) return {};
  const ipaArray = await frenchIpa([...words]);
  return Object.fromEntries([...words].map((word, i) => [word, ipaArray[i]]));
};
