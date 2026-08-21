import { restoreLettersInIpa } from "helpers/restoreLettersInIpa";

export const normalizerFrIpa = (originalWord: string, ipaWord: string): string => {
  return restoreLettersInIpa(originalWord, ipaWord, [
    // Restore "g" in "bourg"
    { ipaCharToBeReplaced: ["buʁɡ", "buʁg", "buʁɠ", "buʁɢ"], lettersToRestore: { bourg: "buʁɡ" } },
    { ipaCharToBeReplaced: "buʁ", lettersToRestore: { bourg: "buʁɡ" } },
    // Restore "n"/"m" instead of tilde
    { ipaCharToBeReplaced: "̃", lettersToRestore: { n: "n", m: "m" } },
    // Restore "u" instead of "w"
    { ipaCharToBeReplaced: "w", lettersToRestore: { u: "u", oi: "u" } },
    // Restore "ɛ" instead of "ø"
    { ipaCharToBeReplaced: "ø", lettersToRestore: { eu: "ɛ" } },
    // Restore "ɛl" instead of "ɛj"
    { ipaCharToBeReplaced: "ɛj", lettersToRestore: { eil: "ɛl", eille: "ɛl" } },
    // Restore "il" instead of "ij"
    { ipaCharToBeReplaced: "ij", lettersToRestore: { ille: "il" } },
  ]);
};
