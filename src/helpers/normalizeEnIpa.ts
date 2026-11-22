import { restoreLettersInIpa, type RestoreIpaRule } from "helpers/restoreLettersInIpa";

export const doubleConsonantRestoreRules: RestoreIpaRule[] = [
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
];

export const tchRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "tʃ", lettersToRestore: { tch: "ttʃ" } },
];

const vowelLeLetters = { ale: "aɫ", ele: "eɫ", elle: "eɫ", ile: "iɫ", ole: "ɔɫ", ule: "uɫ" };

export const syllabicLeRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "əɫ$", lettersToRestore: { ...vowelLeLetters, le: "ɫ" } },
];

export const areRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "ɛɹ$", lettersToRestore: { are: "ɛɹ" } },
];

export const erRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["ɛɹ", "əɹ"], lettersToRestore: { er: "ɛɹ" }, keepStress: true },
];

export const erCloseRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["ɛɹ", "əɹ"], lettersToRestore: { er: "eɹ" }, keepStress: true },
];

export const jaRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "i$", lettersToRestore: { y: "iː", ey: "iː", ie: "iː" } },
  { ipaCharToBeReplaced: "i", lettersToRestore: { ea: "ɨ", ei: "ɨ", e: "ɨ" } },
  { ipaCharToBeReplaced: "ɔ", lettersToRestore: { au: "ɔː", aw: "ɔː" } },
  { ipaCharToBeReplaced: "ɹu$", lettersToRestore: { rew: "ɹjuː" } },
  {
    ipaCharToBeReplaced: ["ju$", "u$"],
    lettersToRestore: { ew: "juː", ue: "uː", ou: "uː", ugh: "juː" },
  },
  { ipaCharToBeReplaced: "k", lettersToRestore: { ck: "kk", cc: "kk" }, window: 2 },
  { ipaCharToBeReplaced: "t$", lettersToRestore: { tte: "tt" } },
  {
    ipaCharToBeReplaced: ["vən$", "vɪn$"],
    lettersToRestore: { aven: "vn", ven: "vn", phen: "vn" },
  },
  { ipaCharToBeReplaced: ["iəs$", "jəs$", "ɪəs$"], lettersToRestore: { ius: "ius" } },
  { ipaCharToBeReplaced: ["iəm$", "jəm$", "ɪəm$"], lettersToRestore: { ium: "ium" } },
  { ipaCharToBeReplaced: ["əs$", "əz$"], lettersToRestore: { us: "əs" } },
  { ipaCharToBeReplaced: "əm$", lettersToRestore: { um: "əm" } },
  { ipaCharToBeReplaced: "vən", lettersToRestore: { vens: "vn", phens: "vn" } },
  ...areRestoreRules,
  { ipaCharToBeReplaced: ["ɝ$", "ɚ$"], lettersToRestore: { ir: "iːɹ" } },
  { ipaCharToBeReplaced: "əz$", lettersToRestore: { as: "as", is: "is", os: "ɔs", ys: "is" } },
  {
    ipaCharToBeReplaced: "z$",
    lettersToRestore: { ays: "z", eys: "z", oys: "z", as: "s", is: "s", os: "s", ys: "s" },
  },
];

const shireIpa = ["ʃaɪɹ$", "ʃaɪɚ$", "ʃaɪɝ$", "ʃaɝ$", "ʃaɚ$", "ʃɝ$", "ʃɚ$", "ʃɪɹ$", "ʃəɹ$"];
export const shireRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: shireIpa, lettersToRestore: { shire: "ʃɪɹ" } },
];
export const shireLongRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: shireIpa, lettersToRestore: { shire: "ʃiːɹ" } },
];

const mouthIpa = ["məθ$", "maʊθ$", "mʊθ$", "muθ$"];
export const mouthRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: mouthIpa, lettersToRestore: { mouth: "mʊθ" } },
];
export const mouthReducedRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: mouthIpa, lettersToRestore: { mouth: "mʌθ" } },
];
export const mouthDiphthongRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: mouthIpa, lettersToRestore: { mouth: "maʊθ" } },
];

const boroughIpa = ["ɝoʊ$", "ɚoʊ$", "ɝə$", "ɚə$", "ʌɹə$", "əɹə$", "ɹə$", "ʌɹoʊ$", "əɹoʊ$"];
const broughIpa = ["ɹəf$", "ɹʌf$", "ɹoʊ$", "ɹə$"];
export const boroughRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: boroughIpa, lettersToRestore: { orough: "ɔɹɔ" } },
  { ipaCharToBeReplaced: broughIpa, lettersToRestore: { rough: "ɹɔ" } },
];
export const boroughReducedRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: boroughIpa, lettersToRestore: { orough: "əɹə" } },
  { ipaCharToBeReplaced: broughIpa, lettersToRestore: { rough: "ɹə" } },
];

export const woodRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "ʊd$", lettersToRestore: { ood: "ʊd" } },
];

export const sexRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["sɪks$", "səks$"], lettersToRestore: { sex: "sɛks" } },
];

export const syllabicLRestoreRules: RestoreIpaRule[] = [
  ...syllabicLeRestoreRules,
  { ipaCharToBeReplaced: "kəɫ", lettersToRestore: { ichael: "kɫ" } },
];

export const syllabicLeSchwaRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "əɫ$", lettersToRestore: { ...vowelLeLetters, le: "əɫ" } },
];

export const syllabicLSchwaRestoreRules: RestoreIpaRule[] = [
  ...syllabicLeSchwaRestoreRules,
  { ipaCharToBeReplaced: "kəɫ", lettersToRestore: { ichael: "kəɫ" } },
];

export const ellRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "eɪɫ", lettersToRestore: { ell: "ɛɫɫ" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "aɪɫ", lettersToRestore: { ell: "aɪɫɫ" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɔɪɫ", lettersToRestore: { ell: "ɔɪɫɫ" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɪɫ", lettersToRestore: { ell: "ɛɫɫ" }, keepStress: true, window: 1 },
];

export const ettRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "eɪt", lettersToRestore: { ett: "ɛtt" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "aɪt", lettersToRestore: { ett: "aɪtt" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɔɪt", lettersToRestore: { ett: "ɔɪtt" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɪt", lettersToRestore: { ett: "ett" }, keepStress: true, window: 1 },
];

export const orrRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["ɝɹ", "ɚɹ"], lettersToRestore: { orr: "ɔɹɹ" } },
];

export const sRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "z", lettersToRestore: { s: "s" } },
];

export const juzRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "juz", lettersToRestore: { ews: "juz", ues: "juz", ughes: "juz" } },
  { ipaCharToBeReplaced: "nuz", lettersToRestore: { news: "njuz" } },
];

export const ayRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["eɪ", "ɛɪ"], lettersToRestore: { ay: "eɪ" } },
];
export const ayDiphthongRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["eɪ", "ɛɪ"], lettersToRestore: { ay: "aɪ" } },
];

const ayesIpa = ["eɪɛs$", "eɪɛz$", "eɪs$", "eɪz$"];
const oyesIpa = ["ɔɪɛs$", "ɔɪɛz$", "ɔɪs$", "ɔɪz$"];
export const yesRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ayesIpa, lettersToRestore: { ayes: "eɪz" } },
  { ipaCharToBeReplaced: oyesIpa, lettersToRestore: { oyes: "ɔɪz" } },
];
export const yesDiphthongRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ayesIpa, lettersToRestore: { ayes: "aɪz" } },
  { ipaCharToBeReplaced: oyesIpa, lettersToRestore: { oyes: "ɔɪz" } },
];
export const yesVoicelessRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ayesIpa, lettersToRestore: { ayes: "eɪs" } },
  { ipaCharToBeReplaced: oyesIpa, lettersToRestore: { oyes: "ɔɪs" } },
];

export const irRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["ɝ", "ɚ"], lettersToRestore: { ir: "ɪɹ" } },
];

export const arOrRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "ɝ", lettersToRestore: { ear: "ɝ" } },
  { ipaCharToBeReplaced: "ɚ", lettersToRestore: { ear: "ɚ" } },
  { ipaCharToBeReplaced: ["ɝ", "ɚ"], lettersToRestore: { ar: "ɑɹ" } },
  { ipaCharToBeReplaced: ["ɝ", "ɚ"], lettersToRestore: { or: "oɹ" } },
];

const eIConsonants: [string, string[]][] = [
  ["b", ["b"]],
  ["d", ["d"]],
  ["f", ["f", "ph"]],
  ["ɡ", ["g"]],
  ["k", ["k", "c", "ck"]],
  ["ɫ", ["l"]],
  ["m", ["m"]],
  ["n", ["n"]],
  ["p", ["p"]],
  ["ɹ", ["r"]],
  ["s", ["s", "c"]],
  ["t", ["t"]],
  ["v", ["v"]],
  ["z", ["z", "s"]],
  ["ʃ", ["sh"]],
  ["tʃ", ["ch"]],
  ["dʒ", ["g", "dg", "j"]],
  ["θ", ["th"]],
  ["ð", ["th"]],
  ["h", ["h"]],
];

const ettIRestoreRules: RestoreIpaRule[] = eIConsonants.map(([ipaC]) => ({
  ipaCharToBeReplaced: ipaC + "ɪt",
  lettersToRestore: { ett: ipaC + "ɪt" },
  window: 1,
}));

export const geminateRestoreRules: RestoreIpaRule[] = [
  ...doubleConsonantRestoreRules,
  ...tchRestoreRules,
  ...ellRestoreRules,
  ...ettRestoreRules,
  ...orrRestoreRules,
  ...ettIRestoreRules,
];

export const geminateSingleRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "eɪɫ", lettersToRestore: { ell: "ɛɫ" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "aɪɫ", lettersToRestore: { ell: "aɪɫ" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɔɪɫ", lettersToRestore: { ell: "ɔɪɫ" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɪɫ", lettersToRestore: { ell: "ɛɫ" }, keepStress: true, window: 1 },
  { ipaCharToBeReplaced: "eɪt", lettersToRestore: { ett: "ɛt" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "aɪt", lettersToRestore: { ett: "aɪt" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɔɪt", lettersToRestore: { ett: "ɔɪt" }, keepStress: true, window: 2 },
  { ipaCharToBeReplaced: "ɪt", lettersToRestore: { ett: "et" }, keepStress: true, window: 1 },
  { ipaCharToBeReplaced: ["ɝɹ", "ɚɹ"], lettersToRestore: { orr: "ɔɹ" } },
];

const rVowels = { ar: "ɑɹ", or: "oɹ", ir: "ɪɹ" };
export const koRVowelRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["ɝ$", "ɚ$"], lettersToRestore: { ir: "iɹɨ" } },
  {
    ipaCharToBeReplaced: ["ɝə", "ɚə"],
    lettersToRestore: Object.fromEntries(
      Object.entries(rVowels).flatMap(([letters, ipa]) =>
        Object.entries({ a: "a", i: "i", o: "ɔ", u: "u" }).map(([vowel, vowelIpa]) => [
          letters + vowel,
          ipa + vowelIpa,
        ]),
      ),
    ),
  },
  {
    ipaCharToBeReplaced: ["ɝoʊ", "ɚoʊ", "ɝo", "ɚo"],
    lettersToRestore: Object.fromEntries(
      Object.entries(rVowels).map(([letters, ipa]) => [letters + "o", ipa + "o"]),
    ),
  },
  {
    ipaCharToBeReplaced: ["ɝi", "ɚi", "ɝɪ", "ɚɪ"],
    lettersToRestore: Object.fromEntries(
      Object.entries(rVowels).flatMap(([letters, ipa]) =>
        ["i", "y"].map(vowel => [letters + vowel, ipa + "i"]),
      ),
    ),
  },
];

export const koGeminateRestoreRules: RestoreIpaRule[] = geminateRestoreRules.filter(
  rule =>
    !("tt" in rule.lettersToRestore) &&
    !ellRestoreRules.includes(rule) &&
    !ettIRestoreRules.includes(rule),
);

export const airRestoreRules: RestoreIpaRule[] = [
  ...areRestoreRules,
  { ipaCharToBeReplaced: "ɛɹ", lettersToRestore: { air: "ɛɹ" } },
];

export const bgRestoreRules: RestoreIpaRule[] = [
  ...airRestoreRules,
  { ipaCharToBeReplaced: mouthIpa, lettersToRestore: { mouth: "məθ" } },
  { ipaCharToBeReplaced: boroughIpa, lettersToRestore: { orough: "əɹɔ" } },
  { ipaCharToBeReplaced: broughIpa, lettersToRestore: { rough: "ɹɔ" } },
  { ipaCharToBeReplaced: "jən$", lettersToRestore: { ion: "jɔn" } },
  { ipaCharToBeReplaced: "jə$", lettersToRestore: { ia: "ia" } },
  { ipaCharToBeReplaced: "ts", lettersToRestore: { tz: "ʦ", zz: "ʦ", c: "ʦ", z: "ʦ" } },
  { ipaCharToBeReplaced: "ən$", lettersToRestore: { oln: "əɫn", on: "ən" } },
  { ipaCharToBeReplaced: ["ənz$", "əns$"], lettersToRestore: { ons: "əns" } },
  { ipaCharToBeReplaced: ["əndz$", "ənds$"], lettersToRestore: { onds: "ənds" } },
  { ipaCharToBeReplaced: "əm$", lettersToRestore: { om: "əm" } },
  { ipaCharToBeReplaced: "aɪə", lettersToRestore: { ie: "aɪə" }, keepStress: true },
];

export const cyrlRestoreRules: RestoreIpaRule[] = [
  ...syllabicLRestoreRules,
  ...airRestoreRules,
  ...shireRestoreRules,
  { ipaCharToBeReplaced: ["sɪks$", "səks$"], lettersToRestore: { ssex: "ssɛks" } },
  { ipaCharToBeReplaced: "jə$", lettersToRestore: { ia: "ia" } },
  { ipaCharToBeReplaced: "ts", lettersToRestore: { tz: "t͡s", zz: "t͡s", z: "t͡s" } },
  { ipaCharToBeReplaced: "^wɑʃ", lettersToRestore: { wash: "vɑʃ" } },
];

export const oStrutRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "ʌ", lettersToRestore: { o: "ɔ" } },
];

export const iaRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "aɪæ", lettersToRestore: { ia: "ɪa" } },
];

export const ietyRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "aɪə", lettersToRestore: { ie: "aɪe" }, keepStress: true },
];

export const uelRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["uəɫ", "uɫ"], lettersToRestore: { uel: "ueɫ" } },
];

export const ngRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["ŋɡ", "ŋg"], lettersToRestore: { ng: "nɡ" } },
  { ipaCharToBeReplaced: "ŋ", lettersToRestore: { ng: "nɡ" } },
];

export const ngtRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: "ŋt", lettersToRestore: { ngt: "ŋt" } },
];

export const ngConsonantRestoreRules: RestoreIpaRule[] = [
  ...ngtRestoreRules,
  {
    ipaCharToBeReplaced: ["ŋs", "ŋd", "ŋf", "ŋw", "ŋɫ", "ŋm", "ŋb"],
    lettersToRestore: {
      ngs: "ŋs",
      ngd: "ŋd",
      ngf: "ŋf",
      ngw: "ŋw",
      ngl: "ŋɫ",
      ngm: "ŋm",
      ngb: "ŋb",
    },
  },
];

export const koVowelRestoreRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["sən", "zən"], lettersToRestore: { son: "sɨn" } },
  { ipaCharToBeReplaced: ["sən$", "zən$"], lettersToRestore: { sen: "sɨn" } },
  { ipaCharToBeReplaced: "ksən$", lettersToRestore: { xon: "ksɨn" } },
  { ipaCharToBeReplaced: "dən$", lettersToRestore: { den: "dɨn" } },
  { ipaCharToBeReplaced: "tən$", lettersToRestore: { tten: "tɨn", ten: "tɨn" } },
  { ipaCharToBeReplaced: "vən$", lettersToRestore: { ven: "vɨn", phen: "vɨn" } },
  { ipaCharToBeReplaced: "ən$", lettersToRestore: { oln: "ən", an: "ən", en: "ən", on: "ən" } },
  { ipaCharToBeReplaced: ["əs$", "əz$"], lettersToRestore: { as: "əs", us: "əs" } },
  { ipaCharToBeReplaced: "əm$", lettersToRestore: { am: "əm", om: "əm", um: "əm" } },
  { ipaCharToBeReplaced: "ənd$", lettersToRestore: { ond: "ənd", und: "ənd" } },
  { ipaCharToBeReplaced: "əɫd$", lettersToRestore: { ald: "əɫd", old: "əɫd" } },
  { ipaCharToBeReplaced: "əns$", lettersToRestore: { ance: "əns", ence: "əns" } },
  { ipaCharToBeReplaced: "ənt$", lettersToRestore: { ant: "ənt" } },
  { ipaCharToBeReplaced: "ʃət$", lettersToRestore: { shot: "ʃɔt" } },
  { ipaCharToBeReplaced: "ət$", lettersToRestore: { otte: "ət", ott: "ət", ot: "ət" } },
  { ipaCharToBeReplaced: "jəɫ", lettersToRestore: { iel: "jəɫ" } },
  { ipaCharToBeReplaced: ["uəɫ", "uɫ"], lettersToRestore: { uel: "uəɫ" } },
  { ipaCharToBeReplaced: "kw", lettersToRestore: { qu: "kʷ" } },
  { ipaCharToBeReplaced: "ɡw", lettersToRestore: { gu: "ɡʷ" } },
  { ipaCharToBeReplaced: "^kw", lettersToRestore: { kw: "kʷ" } },
  { ipaCharToBeReplaced: "^ɡw", lettersToRestore: { gw: "ɡʷ" } },
  { ipaCharToBeReplaced: "tu", lettersToRestore: { tew: "tju" } },
  { ipaCharToBeReplaced: "stu", lettersToRestore: { stu: "stju" } },
  { ipaCharToBeReplaced: "ts", lettersToRestore: { tz: "ʦ", zz: "ʦ", z: "ʦ" } },
  { ipaCharToBeReplaced: "du", lettersToRestore: { dew: "dju" } },
  ...["ə", "ɪ", "i", "ɛ", "æ", "ɑ", "o", "u", "ʌ", "ɔ"].map(vowelIpa => ({
    ipaCharToBeReplaced: "ŋ" + vowelIpa,
    lettersToRestore: Object.fromEntries(
      ["a", "e", "i", "o", "u", "y"].map(vowel => ["ng" + vowel, "ŋɡ" + vowelIpa]),
    ),
  })),
];

export const koSkippedVowelRestoreRules: RestoreIpaRule[] = [
  ...oStrutRestoreRules,
  ...iaRestoreRules,
  ...uelRestoreRules,
  ...ngRestoreRules,
];

const eIRestoreRules: RestoreIpaRule[] = [
  ...ettIRestoreRules,
  ...eIConsonants.flatMap(([ipaC, spellings]) => [
    {
      ipaCharToBeReplaced: ipaC + "ɪ",
      lettersToRestore: { ea: ipaC + "ɪ", ee: ipaC + "ɪ", ei: ipaC + "ɪ", ey: ipaC + "ɪ" },
      window: 1,
    },
    { ipaCharToBeReplaced: ipaC + "ɪɹ", lettersToRestore: { er: ipaC + "ɪɹ" }, window: 1 },
    {
      ipaCharToBeReplaced: ipaC + "ɪ",
      lettersToRestore: Object.fromEntries(spellings.map(letters => [letters + "e", ipaC + "e"])),
      window: 1,
    },
  ]),
];

export const normalizeEnIpa = (
  originalWord: string,
  ipaWord: string,
  extraRules: RestoreIpaRule[] = [],
  skippedRules: RestoreIpaRule[] = [],
): string => {
  const rules: RestoreIpaRule[] = [
    ...mouthRestoreRules,
    { ipaCharToBeReplaced: ["iɪ", "əɪ"], lettersToRestore: { ee: "iː" } },
    { ipaCharToBeReplaced: "ɑ", lettersToRestore: { aa: "aː" } },
    { ipaCharToBeReplaced: "i", lettersToRestore: { ee: "iː" } },
    { ipaCharToBeReplaced: "ʊ", lettersToRestore: { oo: "ʊː" } },
    { ipaCharToBeReplaced: "u", lettersToRestore: { oo: "uː" } },
    { ipaCharToBeReplaced: ["juə", "ju"], lettersToRestore: { uu: "uː" } },
    ...doubleConsonantRestoreRules,
    ...orrRestoreRules,
    { ipaCharToBeReplaced: "toʊn", lettersToRestore: { town: "taʊn" } },
    { ipaCharToBeReplaced: "oʊ", lettersToRestore: { ow: "oɷ" } },
    { ipaCharToBeReplaced: ["oʊə", "oʊæ", "oʊɑ"], lettersToRestore: { oa: "oa" } },
    { ipaCharToBeReplaced: "oʊn$", lettersToRestore: { oan: "oan" } },
    { ipaCharToBeReplaced: "oʊnə", lettersToRestore: { oana: "oana" } },
    { ipaCharToBeReplaced: "eɪʃən", lettersToRestore: { ation: "eɪʃən" } },
    { ipaCharToBeReplaced: "oʊʃən", lettersToRestore: { ocean: "oɷʃən", otion: "oɷʃən" } },
    { ipaCharToBeReplaced: "ʃən", lettersToRestore: { tion: "ʃən", cean: "ʃən" } },
    { ipaCharToBeReplaced: "kəɫ", lettersToRestore: { chael: "keɫ" } },
    { ipaCharToBeReplaced: "tʃəɫ", lettersToRestore: { chael: "tʃeɫ" } },
    ...uelRestoreRules,
    { ipaCharToBeReplaced: "iəɫ", lettersToRestore: { iel: "ieɫ" } },
    { ipaCharToBeReplaced: "^əɫd", lettersToRestore: { ald: "ɔɫd" } },
    ...erRestoreRules,
    ...erCloseRestoreRules,
    { ipaCharToBeReplaced: ["ɑ", "ə"], lettersToRestore: { o: "ɔ" } },
    ...oStrutRestoreRules,
    { ipaCharToBeReplaced: ["ɛ", "ə"], lettersToRestore: { a: "a" } },
    { ipaCharToBeReplaced: ["eɪi$", "eɪɪ$"], lettersToRestore: { ei: "ɛɪ" } },
    { ipaCharToBeReplaced: ["eɪ", "ɛɪ"], lettersToRestore: { ei: "ɛɪ", ey: "ɛɪ" } },
    { ipaCharToBeReplaced: ["e", "ɛ"], lettersToRestore: { ei: "ɛɪ", ey: "ɛɪ" } },
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
    ...ayRestoreRules,
    { ipaCharToBeReplaced: ["eɪ", "ɛɪ"], lettersToRestore: { e: "ɛ" } },
    ...ellRestoreRules,
    ...ettRestoreRules,
    { ipaCharToBeReplaced: "ɪɫ", lettersToRestore: { el: "eɫ" }, window: 1 },
    { ipaCharToBeReplaced: "eɪt", lettersToRestore: { et: "ɛt" }, keepStress: true, window: 2 },
    { ipaCharToBeReplaced: "aɪt", lettersToRestore: { et: "aɪt" }, keepStress: true, window: 2 },
    { ipaCharToBeReplaced: "ɔɪt", lettersToRestore: { et: "ɔɪt" }, keepStress: true, window: 2 },
    { ipaCharToBeReplaced: "ɪt", lettersToRestore: { et: "et" } },
    { ipaCharToBeReplaced: "jə", lettersToRestore: { ie: "ɪɛ" } },
    {
      ipaCharToBeReplaced: "aɪæ",
      lettersToRestore: { ianne: "aɪæ", iane: "aɪæ" },
      keepStress: true,
    },
    ...iaRestoreRules,
    { ipaCharToBeReplaced: "iə", lettersToRestore: { ea: "ea" } },
    { ipaCharToBeReplaced: "ə", lettersToRestore: { ea: "ea" } },
    { ipaCharToBeReplaced: "ɛ", lettersToRestore: { ea: "ɛ" } },
    { ipaCharToBeReplaced: "ɛ", lettersToRestore: { ai: "ai" } },
    { ipaCharToBeReplaced: "əp$", lettersToRestore: { up: "ʌp" } },
    { ipaCharToBeReplaced: ["w", "ə"], lettersToRestore: { u: "u" } },
    ...ietyRestoreRules,
    { ipaCharToBeReplaced: "ə", lettersToRestore: { i: "i" } },
    { ipaCharToBeReplaced: "ə", lettersToRestore: { e: "e" } },
    ...eIRestoreRules,
    { ipaCharToBeReplaced: "dʒə", lettersToRestore: { ja: "dʒa" } },
    { ipaCharToBeReplaced: "jə", lettersToRestore: { ja: "ja" } },
    { ipaCharToBeReplaced: "dʒ", lettersToRestore: { ja: "dʒ" } },
    { ipaCharToBeReplaced: "ʒ", lettersToRestore: { ja: "ʒ" } },
    { ipaCharToBeReplaced: "j", lettersToRestore: { ja: "j" } },
    { ipaCharToBeReplaced: "ə", lettersToRestore: { ja: "ja" } },
    ...juzRestoreRules,
    ...yesRestoreRules,
    ...sRestoreRules,
    { ipaCharToBeReplaced: "ɡz", lettersToRestore: { x: "ks" } },
    { ipaCharToBeReplaced: "ɹəɫ", lettersToRestore: { rl: "ɹɫ" } },
    ...arOrRestoreRules,
    ...irRestoreRules,
    { ipaCharToBeReplaced: ["aɝ", "aɚ"], lettersToRestore: { yrr: "ɪɹ", yr: "aɪɹ", ir: "aɪɹ" } },
    { ipaCharToBeReplaced: ["ɝ", "ɚ"], lettersToRestore: { ro: "ɹo" } },
    { ipaCharToBeReplaced: "nu", lettersToRestore: { new: "nju" } },
    { ipaCharToBeReplaced: "mɹi", lettersToRestore: { mery: "meɹi" } },
    { ipaCharToBeReplaced: "ɝɹ", lettersToRestore: { er: "ɝ" } },
    { ipaCharToBeReplaced: "ɚɹ", lettersToRestore: { er: "ɚ" } },
    { ipaCharToBeReplaced: "ŋh", lettersToRestore: { ngh: "nɡ" } },
    ...ngRestoreRules,
    { ipaCharToBeReplaced: ["ɡh", "gh"], lettersToRestore: { gh: "ɡ" } },
    { ipaCharToBeReplaced: "^", lettersToRestore: { h: "h" } },
    { ipaCharToBeReplaced: ["ɫk", "lk"], lettersToRestore: { lk: "ɫk" } },
    { ipaCharToBeReplaced: "k", lettersToRestore: { lk: "ɫk" } },
    ...tchRestoreRules,
    { ipaCharToBeReplaced: "^mɪkɹ", lettersToRestore: { micr: "maɪkɹ" } },
    { ipaCharToBeReplaced: "sɔft", lettersToRestore: { soft: "sɔft" } },
    { ipaCharToBeReplaced: "sɔf", lettersToRestore: { soft: "sɔft" } },
    ...boroughRestoreRules,
    ...woodRestoreRules,
    ...sexRestoreRules,
    { ipaCharToBeReplaced: ["eiə$", "eɪə$", "ɛɪə$"], lettersToRestore: { eya: "ɛja" } },
    { ipaCharToBeReplaced: "bɝoʊ", lettersToRestore: { burgh: "bɝɣ" } },
    { ipaCharToBeReplaced: "bɚoʊ", lettersToRestore: { burgh: "bɚɣ" } },
    ...extraRules,
  ];
  return restoreLettersInIpa(
    originalWord,
    ipaWord,
    rules.filter(rule => !skippedRules.includes(rule)),
  ).replace(/(\p{L})\1([ˈˌ]?)\1/gu, "$1$2$1");
};
