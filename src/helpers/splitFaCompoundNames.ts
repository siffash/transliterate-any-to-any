import { COMPOUND_NAMES } from "data/fa/fa-compound-names";

const compoundName = new RegExp(
  `(?<![\\p{L}\\p{M}])(${Object.keys(COMPOUND_NAMES).join("|")})‌?(${Object.values(COMPOUND_NAMES).flat().join("|")})(?![\\p{L}\\p{M}])`,
  "gu",
);

export const splitFaCompoundNames = (text: string): string =>
  text.replace(/[^\s]+/gu, word => {
    const bare = word.replace(/[ً-ْٰ]/g, "");
    const split = bare.replace(compoundName, (match, first: string, second: string) =>
      COMPOUND_NAMES[first]!.includes(second) ? `${first} ${second}` : match,
    );
    return split === bare ? word : split;
  });
