import { RestoreIpaRule, restoreLettersInIpa } from "helpers/restoreLettersInIpa";

const bourgRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["buʁɡ", "buʁg", "buʁɠ", "buʁɢ"], lettersToRestore: { bourg: "buʁɡ" } },
  { ipaCharToBeReplaced: "buʁ", lettersToRestore: { bourg: "buʁɡ" } },
];

const japaneseRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "w", lettersToRestore: { u: "u", oi: "ow", oî: "ow", oy: "ow" } },
  { ipaCharToBeReplaced: "w", lettersToRestore: { o: "o" } },
  {
    ipaCharToBeReplaced: "o$",
    lettersToRestore: {
      eau: "oː",
      eaux: "oː",
      au: "oː",
      aux: "oː",
      aud: "oː",
      auds: "oː",
      ault: "oː",
      aut: "oː",
      auts: "oː",
    },
  },
  { ipaCharToBeReplaced: ["o", "ɔ"], lettersToRestore: { eau: "oː", au: "oː" } },
  { ipaCharToBeReplaced: "n$", lettersToRestore: { ne: "nə", nes: "nə", nne: "nnə", nnes: "nnə" } },
];

const frFinalDoubleConsonantRules: RestoreIpaRule[] = [..."bfmnpst"].map(c => ({
  ipaCharToBeReplaced: c + "$",
  lettersToRestore: { [c + c + "e"]: c + c, [c + c + "es"]: c + c },
}));

const frDoubleConsonantRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "b", lettersToRestore: { bb: "bb" } },
  { ipaCharToBeReplaced: "f", lettersToRestore: { ff: "ff" } },
  { ipaCharToBeReplaced: "m", lettersToRestore: { mm: "mm" } },
  { ipaCharToBeReplaced: "n", lettersToRestore: { nn: "nn" } },
  { ipaCharToBeReplaced: "p", lettersToRestore: { pp: "pp" } },
  { ipaCharToBeReplaced: "ʁ", lettersToRestore: { rr: "ʁʁ" } },
  { ipaCharToBeReplaced: "s", lettersToRestore: { ss: "ss" } },
  { ipaCharToBeReplaced: "t", lettersToRestore: { tt: "tt" } },
];

export type NormalizeFrIpaOptions = {
  japanese?: boolean;
  doubleR?: boolean;
  keepSchwa?: boolean;
  finalIeu?: boolean;
  bareBourg?: boolean;
  doubleConsonants?: false | "medial" | "final";
  oiO?: boolean;
};

export const normalizeFrIpa = (
  originalWord: string,
  ipaWord: string,
  {
    japanese = false,
    doubleR = false,
    keepSchwa = false,
    finalIeu = false,
    bareBourg = false,
    doubleConsonants = false,
    oiO = false,
  }: NormalizeFrIpaOptions = {},
): string => {
  const bourg = bareBourg && originalWord === "bourg" ? [] : bourgRules;
  if (japanese) {
    return restoreLettersInIpa(originalWord, ipaWord, [...bourg, ...japaneseRules]);
  }
  const finalJo = /ieux?$/.test(originalWord) && ipaWord.endsWith("jø");
  if (finalJo) ipaWord = ipaWord.slice(0, -1) + (finalIeu ? "\uE000" : "e");
  return restoreLettersInIpa(originalWord, ipaWord, [
    ...(doubleR ? [{ ipaCharToBeReplaced: "ʁ", lettersToRestore: { rr: "ʁʁ" } }] : []),
    ...(doubleConsonants === "final" ? frFinalDoubleConsonantRules : []),
    ...(doubleConsonants ? frDoubleConsonantRules : []),
    ...bourg,
    { ipaCharToBeReplaced: "̃", lettersToRestore: { n: "n", m: "m" } },
    {
      ipaCharToBeReplaced: "w",
      lettersToRestore: oiO
        ? { u: "u", oi: "o", oî: "o", oy: "o" }
        : { u: "u", oi: "u", oî: "u", oy: "u" },
    },
    { ipaCharToBeReplaced: "w", lettersToRestore: { o: "o" } },
    { ipaCharToBeReplaced: "ø", lettersToRestore: { eu: "e" } },
    ...(keepSchwa ? [] : [{ ipaCharToBeReplaced: "ə", lettersToRestore: { e: "e" } }]),
    { ipaCharToBeReplaced: "ij$", lettersToRestore: { ille: "il", illes: "il" } },
  ])
    .replaceAll("\u0303", "n")
    .replace("\uE000", "ø")
    .replace(/([aeiouyɑɛɔøœə])\1\1/gu, "$1$1");
};
