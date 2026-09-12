import { restoreLettersInIpa } from "helpers/restoreLettersInIpa";

export const normalizerFrIpa = (originalWord: string, ipaWord: string): string => {
  return restoreLettersInIpa(originalWord, ipaWord, [
    // Restore "g" in "bourg"
    { ipaCharToBeReplaced: ["buʁɡ", "buʁg", "buʁɠ", "buʁɢ"], lettersToRestore: { bourg: "buʁɡ" } },
    { ipaCharToBeReplaced: "buʁ", lettersToRestore: { bourg: "buʁɡ" } },
    // Restore "n"/"m" instead of tilde
    { ipaCharToBeReplaced: "̃", lettersToRestore: { n: "n", m: "m" } },
    // Restore "u"
    { ipaCharToBeReplaced: "w", lettersToRestore: { u: "u", oi: "u" } },
    // Restore "o"
    { ipaCharToBeReplaced: "w", lettersToRestore: { o: "o" } },
    // Restore "ɛ"
    { ipaCharToBeReplaced: "ø", lettersToRestore: { eu: "ɛ" } },
    // Restore "ɛl"
    { ipaCharToBeReplaced: "ɛj", lettersToRestore: { eil: "ɛl", eille: "ɛl" } },
    // Restore "il"
    { ipaCharToBeReplaced: "ij", lettersToRestore: { ille: "il" } },
  ]);
};
