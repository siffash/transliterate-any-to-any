import { languages } from "helpers/constants";

const FRENCH_ENDING = /(?:[bcdfgjklmnpqrstvxzç]e|[gq]ue|ie)$/u;
const NATIVE = /ele$|oy[^aeiou]/u;

export const lbFrenchIpa = async (
  texts: string[],
  map: Record<string, string>,
  frenchIpa: (words: string[]) => Promise<string[]>,
  withMap = false,
): Promise<Record<string, string>> => {
  const words = new Set<string>();
  for (const text of texts) {
    for (const [match] of text.matchAll(new RegExp(`[${languages.lb.regex}\\p{L}]+`, "gu"))) {
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
