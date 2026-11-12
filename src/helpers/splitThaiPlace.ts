import { PLACE_GENERICS } from "data/th/th-place-generics";
import { segmentThai } from "helpers/segmentThai";

// Longest first, so that แม่น้ำ isn't taken as แม่
const GENERICS = PLACE_GENERICS.map(generic => ({
  joined: generic.replaceAll(" ", ""),
  words: generic.split(" "),
})).sort((a, b) => b.joined.length - a.joined.length);

/**
 * Splits the generic words off the start of a Thai place name (บ้านบางม่วง → บ้าน, บาง, ม่วง).
 * A generic is split off only where a word ends: not from ท่านผู้หญิง, whose first word is ท่าน.
 * @param word - A Thai word, written without spaces.
 * @returns the generic words, then the rest of the name.
 */
export const splitThaiPlace = (word: string): string[] => {
  const parts: string[] = [];
  let rest = word;
  for (;;) {
    const generic = GENERICS.find(({ joined }) => {
      if (!rest.startsWith(joined) || !/^[ก-ฮเ-ไ]/.test(rest.slice(joined.length))) {
        return false;
      }
      const first = segmentThai(rest)[0] ?? rest;
      return first === rest || first === joined || !first.startsWith(joined);
    });
    if (!generic) break;
    parts.push(...generic.words);
    rest = rest.slice(generic.joined.length);
  }
  return [...parts, rest];
};
