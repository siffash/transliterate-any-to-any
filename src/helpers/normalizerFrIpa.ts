import { restoreLettersInIpa } from "helpers/restoreLettersInIpa";

export const normalizerFrIpa = (originalWord: string, ipaWord: string): string => {
  let result = ipaWord;

  // Restore "g" in "bourg"
  if (originalWord.endsWith("bourg") && !/[gɡɠɢɣɰ]$/.test(result)) {
    result = result + "ɡ";
  }

  // Restore "n"/"m" instead of tilde
  result = restoreLettersInIpa(originalWord, result, "̃", { n: "n", m: "m" });

  // Restore "u" instead of "w"
  result = restoreLettersInIpa(originalWord, result, "w", { u: "u", oi: "u" });

  // Restore "ɛl" instead of "ɛj"
  result = restoreLettersInIpa(originalWord, result, "ɛj", { eil: "ɛl", eille: "ɛl" });

  return result;
};
