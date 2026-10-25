import { RestoreIpaRule, restoreLettersInIpa } from "helpers/restoreLettersInIpa";

// Japanese keeps ə, ø, œ, ɛj and the nasal vowels, which it writes differently from e, ɛl and vowel + n
const japaneseRules: RestoreIpaRule[] = [
  // Restore "g" in "bourg"
  { ipaCharToBeReplaced: ["buʁɡ", "buʁg", "buʁɠ", "buʁɢ"], lettersToRestore: { bourg: "buʁɡ" } },
  { ipaCharToBeReplaced: "buʁ", lettersToRestore: { bourg: "buʁɡ" } },
  // Restore "u", and "ow" for "oi" (ロワ, ノワ)
  { ipaCharToBeReplaced: "w", lettersToRestore: { u: "u", oi: "ow", oî: "ow" } },
  // Restore "o"
  { ipaCharToBeReplaced: "w", lettersToRestore: { o: "o" } },
  // Long "au"/"eau" (ルノー, クロード)
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
  // Pronounced final "n" of "-ne"/"-nne" (セーヌ, カンヌ)
  { ipaCharToBeReplaced: "n$", lettersToRestore: { ne: "nə", nes: "nə", nne: "nnə", nnes: "nnə" } },
];

export const normalizeFrIpa = (originalWord: string, ipaWord: string, japanese = false): string => {
  if (japanese) return restoreLettersInIpa(originalWord, ipaWord, japaneseRules);
  return restoreLettersInIpa(originalWord, ipaWord, [
    // Restore "g" in "bourg"
    { ipaCharToBeReplaced: ["buʁɡ", "buʁg", "buʁɠ", "buʁɢ"], lettersToRestore: { bourg: "buʁɡ" } },
    { ipaCharToBeReplaced: "buʁ", lettersToRestore: { bourg: "buʁɡ" } },
    // Restore "n"/"m" instead of tilde
    { ipaCharToBeReplaced: "̃", lettersToRestore: { n: "n", m: "m" } },
    // Restore "u"
    { ipaCharToBeReplaced: "w", lettersToRestore: { u: "u", oi: "u", oî: "u" } },
    // Restore "o"
    { ipaCharToBeReplaced: "w", lettersToRestore: { o: "o" } },
    // Restore "e"
    { ipaCharToBeReplaced: "ø", lettersToRestore: { eu: "e" } },
    { ipaCharToBeReplaced: "ə", lettersToRestore: { e: "e" } },
    // Restore "ɛl"
    { ipaCharToBeReplaced: "ɛj", lettersToRestore: { eil: "ɛl", eille: "ɛl" } },
    // Restore "il"
    { ipaCharToBeReplaced: "ij", lettersToRestore: { ille: "il" } },
    // Tilde with no n/m letter close enough (patients, temps) is still a nasal
  ]).replaceAll("\u0303", "n");
};
