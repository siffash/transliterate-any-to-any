import { restoreLettersInIpa, type RestoreIpaRule } from "helpers/restoreLettersInIpa";

// Extra restore for targets that write a final "-le" (not "-ile") and "Michael" with a bare l (Greek Γκουγκλ, Μαικλ)
export const syllabicLeRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "əɫ$", lettersToRestore: { ichael: "ɫ", ile: "iɫ", le: "ɫ" } },
];

// Restore "ett", whose "tt" restore would otherwise take the "t" first (Garrett). A diphthong keeps
// its "ɪ" and gets what the "e" and "tt" restores give it (Hiett, Spoletto). Targets whose standards
// follow the /ɪt/ pronunciation skip these (Chinese 巴特利特, Korean 바틀릿 for Bartlett)
export const ettRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "eɪt", lettersToRestore: { ett: "ɛtt" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "aɪt", lettersToRestore: { ett: "aɪtt" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɔɪt", lettersToRestore: { ett: "ɔɪtt" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɪt", lettersToRestore: { ett: "ett" }, keepStress: true, window: 1 },
];

export const normalizeEnIpa = (
  originalWord: string,
  ipaWord: string,
  extraRules: RestoreIpaRule[] = [],
  skippedRules: RestoreIpaRule[] = [],
): string => {
  const rules: RestoreIpaRule[] = [
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
    // Mark the "oʊ" of "ow" (Shadow, Window) so that enIpaRules keeps it unreduced
    { ipaCharToBeReplaced: "oʊ", lettersToRestore: { ow: "oɷ" } },
    // Restore "oa"
    { ipaCharToBeReplaced: ["oʊə", "oʊæ", "oʊɑ", "oʊ"], lettersToRestore: { oa: "oa" } },
    // Preserve "eɪʃən" for "ation"
    { ipaCharToBeReplaced: "eɪʃən", lettersToRestore: { ation: "eɪʃən" } },
    // Preserve "ʃən" for "tion"
    { ipaCharToBeReplaced: "ʃən", lettersToRestore: { tion: "ʃən" } },
    // Restore "o"
    { ipaCharToBeReplaced: ["ɑ", "ʌ", "ə"], lettersToRestore: { o: "ɔ" } },
    // Restore "a"
    { ipaCharToBeReplaced: ["ɛ", "ə"], lettersToRestore: { a: "a" } },
    // Drop the extra final "i" of a word-final "ei" read as "eɪi" (Bartolomei)
    { ipaCharToBeReplaced: ["eɪi$", "eɪɪ$"], lettersToRestore: { ei: "ɛɪ" } },
    // Preserve "ei" and "ey"
    { ipaCharToBeReplaced: ["eɪ", "ɛɪ"], lettersToRestore: { ei: "ɛɪ", ey: "ɛɪ" } },
    // Restore "ei"
    { ipaCharToBeReplaced: ["e", "ɛ"], lettersToRestore: { ei: "ɛɪ", ey: "ɛɪ" } },
    // Keep the "eɪ" of a magic "e" (Gate, Grace), which the "e" restore would take
    {
      ipaCharToBeReplaced: ["eɪ", "ɛɪ"],
      lettersToRestore: {
        abe: "eɪ",
        ace: "eɪ",
        ade: "eɪ",
        afe: "eɪ",
        age: "eɪ",
        ake: "eɪ",
        ale: "eɪ",
        ame: "eɪ",
        ane: "eɪ",
        ape: "eɪ",
        ase: "eɪ",
        ate: "eɪ",
        ave: "eɪ",
        aze: "eɪ",
      },
    },
    // Restore "e"
    { ipaCharToBeReplaced: ["eɪ", "ɛɪ"], lettersToRestore: { e: "ɛ" } },
    // Restore "ell", whose "ll" restore would otherwise take the "ɫ" first (Hellerstein). A diphthong
    // keeps its "ɪ" and gets what the "e" and "ll" restores give it (Averell, Tellez); the narrow window
    // keeps the "ɪɫ" of Dilella off its "ell"
    { ipaCharToBeReplaced: "eɪɫ", lettersToRestore: { ell: "ɛɫɫ" }, keepStress: true, window: 2 },
    { ipaCharToBeReplaced: "aɪɫ", lettersToRestore: { ell: "aɪɫɫ" }, keepStress: true, window: 2 },
    { ipaCharToBeReplaced: "ɔɪɫ", lettersToRestore: { ell: "ɔɪɫɫ" }, keepStress: true, window: 2 },
    { ipaCharToBeReplaced: "ɪɫ", lettersToRestore: { ell: "ɛɫɫ" }, keepStress: true, window: 1 },
    ...ettRestoreRules,
    // Restore "el"
    { ipaCharToBeReplaced: "ɪɫ", lettersToRestore: { el: "eɫ" } },
    // Restore "et"
    { ipaCharToBeReplaced: "ɪt", lettersToRestore: { et: "et" } },
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
    { ipaCharToBeReplaced: "ə", lettersToRestore: { i: "i" } },
    // Restore "e"
    { ipaCharToBeReplaced: "ə", lettersToRestore: { e: "e" } },
    // Restore "ja"
    { ipaCharToBeReplaced: "dʒə", lettersToRestore: { ja: "dʒa" } },
    { ipaCharToBeReplaced: "jə", lettersToRestore: { ja: "ja" } },
    { ipaCharToBeReplaced: "dʒ", lettersToRestore: { ja: "dʒ" } },
    { ipaCharToBeReplaced: "ʒ", lettersToRestore: { ja: "ʒ" } },
    { ipaCharToBeReplaced: "j", lettersToRestore: { ja: "j" } },
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
    { ipaCharToBeReplaced: ["ɝ", "ɚ"], lettersToRestore: { ir: "ɪɹ" } },
    { ipaCharToBeReplaced: ["aɝ", "aɚ"], lettersToRestore: { yr: "ɪɹ" } },
    // Restore "ro"
    { ipaCharToBeReplaced: ["ɝ", "ɚ"], lettersToRestore: { ro: "ɹo" } },
    // Restore "nju"
    { ipaCharToBeReplaced: "nu", lettersToRestore: { new: "nju" } },
    // Restore "mery"
    { ipaCharToBeReplaced: "mɹi", lettersToRestore: { mery: "meɹi" } },
    // Remove "ɹ" after "ɝ"/"ɚ" to avoid doubling of "r"
    { ipaCharToBeReplaced: "ɝɹ", lettersToRestore: { er: "ɝ" } },
    { ipaCharToBeReplaced: "ɚɹ", lettersToRestore: { er: "ɚ" } },
    // Restore "ng"
    { ipaCharToBeReplaced: "ŋh", lettersToRestore: { ngh: "nɡ" } },
    { ipaCharToBeReplaced: ["ŋɡ", "ŋg"], lettersToRestore: { ng: "nɡ" } },
    { ipaCharToBeReplaced: "ŋ", lettersToRestore: { ng: "nɡ" } },
    // Remove "h" after "g"
    { ipaCharToBeReplaced: ["ɡh", "gh"], lettersToRestore: { gh: "ɡ" } },
    // Restore "h"
    { ipaCharToBeReplaced: "^", lettersToRestore: { h: "h" } },
    // Restore "lk"
    { ipaCharToBeReplaced: ["ɫk", "lk"], lettersToRestore: { lk: "ɫk" } },
    { ipaCharToBeReplaced: "k", lettersToRestore: { lk: "ɫk" } },
    // Restore "tch"
    { ipaCharToBeReplaced: "tʃ", lettersToRestore: { tch: "ttʃ" } },
    // Restore "soft"
    { ipaCharToBeReplaced: "sɔft", lettersToRestore: { soft: "sɔft" } },
    { ipaCharToBeReplaced: "sɔf", lettersToRestore: { soft: "sɔft" } },
    // Restore "burgh"
    { ipaCharToBeReplaced: "bɝoʊ", lettersToRestore: { burgh: "bɝɣ" } },
    { ipaCharToBeReplaced: "bɚoʊ", lettersToRestore: { burgh: "bɚɣ" } },
    ...extraRules,
  ];
  return restoreLettersInIpa(
    originalWord,
    ipaWord,
    rules.filter(rule => !skippedRules.includes(rule)),
  );
};
