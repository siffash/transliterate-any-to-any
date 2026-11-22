import { PLACE_GENERICS } from "data/th/th-place-generics";
import { segmentThai } from "helpers/segmentThai";

const GENERICS = PLACE_GENERICS.map(generic => ({
  joined: generic.replaceAll(" ", ""),
  words: generic.split(" "),
})).sort((a, b) => b.joined.length - a.joined.length);

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
