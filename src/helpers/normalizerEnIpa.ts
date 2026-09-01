import { restoreLettersInIpa } from "helpers/restoreLettersInIpa";

export const normalizerEnIpa = (originalWord: string, ipaWord: string): string => {
  return restoreLettersInIpa(originalWord, ipaWord, [
    // Restore all double letters
    { ipaCharToBeReplaced: "ɑ", lettersToRestore: { aa: "aː" } },
    { ipaCharToBeReplaced: "i", lettersToRestore: { ee: "iː" } },
    { ipaCharToBeReplaced: "ʊ", lettersToRestore: { oo: "ʊː" } },
    { ipaCharToBeReplaced: "u", lettersToRestore: { oo: "uː" } },
    { ipaCharToBeReplaced: ["juə", "ju"], lettersToRestore: { uu: "uː" } },
    { ipaCharToBeReplaced: "b", lettersToRestore: { bb: "bb" } },
    { ipaCharToBeReplaced: "d", lettersToRestore: { dd: "dd" } },
    { ipaCharToBeReplaced: "f", lettersToRestore: { ff: "ff" } },
    { ipaCharToBeReplaced: "ɡ", lettersToRestore: { gg: "ɡɡ" } },
    { ipaCharToBeReplaced: "k", lettersToRestore: { kk: "kk" } },
    { ipaCharToBeReplaced: "ɫ", lettersToRestore: { ll: "ɫɫ" } },
    { ipaCharToBeReplaced: "m", lettersToRestore: { mm: "mm" } },
    { ipaCharToBeReplaced: "n", lettersToRestore: { nn: "nn" } },
    { ipaCharToBeReplaced: "p", lettersToRestore: { pp: "pp" } },
    { ipaCharToBeReplaced: "ɹ", lettersToRestore: { rr: "ɹɹ" } },
    { ipaCharToBeReplaced: "s", lettersToRestore: { ss: "ss" } },
    { ipaCharToBeReplaced: "t", lettersToRestore: { tt: "tt" } },
    { ipaCharToBeReplaced: "v", lettersToRestore: { vv: "vv" } },
    { ipaCharToBeReplaced: "w", lettersToRestore: { ww: "ww" } },
    { ipaCharToBeReplaced: "z", lettersToRestore: { zz: "zz" } },
    // Restore "oa"
    { ipaCharToBeReplaced: "oʊ", lettersToRestore: { oa: "oa" } },
    // Keep "ʃən" for "tion"
    { ipaCharToBeReplaced: "ʃən", lettersToRestore: { tion: "ʃən" } },
    // Restore "o"
    { ipaCharToBeReplaced: "oʊ", lettersToRestore: { o: "ɔ" } },
    { ipaCharToBeReplaced: ["ɑ", "ʌ", "ə"], lettersToRestore: { o: "ɔ" } },
    // Restore "a"
    { ipaCharToBeReplaced: ["æ", "ɛ", "ə", "o"], lettersToRestore: { a: "a" } },
    // Restore "el"
    { ipaCharToBeReplaced: "ɪɫ", lettersToRestore: { el: "eɫ" } },
    // Restore "et"
    { ipaCharToBeReplaced: "ɪt", lettersToRestore: { et: "et" } },
    // Restore "ei"
    { ipaCharToBeReplaced: "eɪ", lettersToRestore: { ei: "ɛɪ", ey: "ɛɪ" } },
    { ipaCharToBeReplaced: "ɛ", lettersToRestore: { ei: "ɛɪ", ey: "ɛɪ" } },
    // Restore "ie"
    { ipaCharToBeReplaced: "jə", lettersToRestore: { ie: "ɪɛ" } },
    // Restore "ia"
    { ipaCharToBeReplaced: "aɪæ", lettersToRestore: { ia: "ɪa" } },
    // Restore "ea"
    { ipaCharToBeReplaced: "iə", lettersToRestore: { ea: "ea" } },
    { ipaCharToBeReplaced: "ə", lettersToRestore: { ea: "ea" } },
    { ipaCharToBeReplaced: "ɛ", lettersToRestore: { ea: "ɛ" } },
    // Restore "ai"
    { ipaCharToBeReplaced: "ɛ", lettersToRestore: { ai: "ai" } },
    // Restore "u"
    { ipaCharToBeReplaced: ["w", "ə"], lettersToRestore: { u: "u" } },
    // Restore "i"
    { ipaCharToBeReplaced: ["o", "ə"], lettersToRestore: { i: "i" } },
    // Restore "ja"
    { ipaCharToBeReplaced: "ə", lettersToRestore: { ja: "ja" } },
    // Restore "s"
    { ipaCharToBeReplaced: "z", lettersToRestore: { s: "s" } },
    // Restore "x"
    { ipaCharToBeReplaced: "ɡz", lettersToRestore: { x: "ks" } },
    // Restore "ar"
    { ipaCharToBeReplaced: ["ɝ", "ɚ"], lettersToRestore: { ar: "ɑɹ" } },
    // Restore "or"
    { ipaCharToBeReplaced: ["ɝ", "ɚ"], lettersToRestore: { or: "oɹ" } },
    // Restore "ir"
    { ipaCharToBeReplaced: ["aɝ", "aɚ"], lettersToRestore: { yr: "ɪɹ" } },
    // Restore "ro"
    { ipaCharToBeReplaced: ["ɝ", "ɚ"], lettersToRestore: { ro: "ɹo" } },
    // Restore "nju"
    { ipaCharToBeReplaced: "nu", lettersToRestore: { new: "nju" } },
    // Restore "mery"
    { ipaCharToBeReplaced: "mɹi", lettersToRestore: { mery: "meɹi" } },
    // remove "ɹ" after "ɝ"/"ɚ to avoid doubling of "r"
    { ipaCharToBeReplaced: "ɝɹ", lettersToRestore: { er: "ɝ" } },
    { ipaCharToBeReplaced: "ɚɹ", lettersToRestore: { er: "ɚ" } },
    // Restore "ng"
    { ipaCharToBeReplaced: ["ŋɡ", "ŋg"], lettersToRestore: { ng: "nɡ" } },
    { ipaCharToBeReplaced: "ŋ", lettersToRestore: { ng: "nɡ" } },
    // Restore "lk"
    { ipaCharToBeReplaced: ["ɫk", "lk"], lettersToRestore: { lk: "ɫk" } },
    { ipaCharToBeReplaced: "k", lettersToRestore: { lk: "ɫk" } },
    // Restore "soft"
    { ipaCharToBeReplaced: "sɔft", lettersToRestore: { soft: "sɔft" } },
    { ipaCharToBeReplaced: "sɔf", lettersToRestore: { soft: "sɔft" } },
    // Restore "burgh"
    { ipaCharToBeReplaced: "bɝoʊ", lettersToRestore: { burgh: "bɝɣ" } },
    { ipaCharToBeReplaced: "bɚoʊ", lettersToRestore: { burgh: "bɚɣ" } },
  ]);
};
