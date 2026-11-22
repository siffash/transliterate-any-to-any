import { ALLAH_NAMES, SUFFIXES } from "data/ur/ur-suffixes";

const JOINER = "";

const SPACED = new RegExp(`(?<=[\\p{L}\\p{M}]) (${SUFFIXES.join("|")})(?![\\p{L}\\p{M}])`, "gu");

const SPACED_ALLAH = new RegExp(
  `(?<=[\\p{L}\\p{M}]) ?(الل\\p{M}*ہ)(?! (?:${ALLAH_NAMES.join("|")})(?![\\p{L}\\p{M}]))(?![\\p{L}\\p{M}])`,
  "gu",
);

const JOINED = new RegExp(
  `([aɑ]ː?)${JOINER}[aAɑ]ː?(?!l)|${JOINER}(allɑːɦ|Allah)|${JOINER}(\\p{L}?)`,
  "gu",
);

export const markUrduSuffixes = (text: string) =>
  text.replace(SPACED, `${JOINER}$1`).replace(SPACED_ALLAH, `${JOINER}$1`);

export const joinUrduSuffixes = (text: string) =>
  text.replace(JOINED, (_, vowel?: string, allah?: string, letter?: string) =>
    allah ? (allah === "Allah" ? "ullah" : "ʊllɑːh") : (vowel ?? letter!.toLowerCase()),
  );
