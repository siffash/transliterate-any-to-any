import { RestoreIpaRule, restoreLettersInIpa } from "helpers/restoreLettersInIpa";

// Restore "g" in "bourg" (Strasbourg, Luxembourg)
const bourgRules: RestoreIpaRule[] = [
  { ipaCharToBeReplaced: ["buʁɡ", "buʁg", "buʁɠ", "buʁɢ"], lettersToRestore: { bourg: "buʁɡ" } },
  { ipaCharToBeReplaced: "buʁ", lettersToRestore: { bourg: "buʁɡ" } },
];

// Japanese keeps ə, ø, œ, ɛj and the nasal vowels, which it writes differently from e, ɛl and vowel + n
const japaneseRules: RestoreIpaRule[] = [
  // Restore "u", and "ow" for "oi"/"oy" (ロワ, ノワ)
  { ipaCharToBeReplaced: "w", lettersToRestore: { u: "u", oi: "ow", oî: "ow", oy: "ow" } },
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

// A final double before a mute "-e(s)" sits too far from its IPA for the plain restores. Ukrainian writes it
// (Канн, Колетт, Каркассонн), Russian place names mostly don't (Каркасон, Этьен), and "rr" stays single (Пьер, П'єр)
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
  // Targets that write ø (Матьё, 马蒂厄, 마티외) keep the ø of a final "-ieu", which the "eu" restore
  // would turn into the e of "-ier" (Mathieu, not Cartier)
  finalIeu?: boolean;
  // Targets that read a standalone "Bourg" as French does (Bourg-Saint-Maurice Бур-Сен-Морис, ブール＝サン＝モーリス,
  // 부르생모리스) skip the "g" restore there, which Chinese keeps for its 堡 (Bourg-la-Reine 拉雷讷堡)
  bareBourg?: boolean;
  // Russian and Ukrainian keep a spelled double consonant (Руссо, Эммануэль, Миттеран), but not "ll" (Бельвиль);
  // "final" also keeps it before a final mute "-e(s)" (Канн, Колетт)
  doubleConsonants?: false | "medial" | "final";
  // Serbian writes the w of "oi"/"oy" as o (Fransoa, Bloa, Artoa)
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
  const finalJo = finalIeu && /ieux?$/.test(originalWord) && ipaWord.endsWith("jø");
  if (finalJo) ipaWord = ipaWord.slice(0, -1) + "\uE000";
  return (
    restoreLettersInIpa(originalWord, ipaWord, [
      // Restore "rr" for targets where a single r between vowels is a tap (Carrefour, Thierry)
      ...(doubleR ? [{ ipaCharToBeReplaced: "ʁ", lettersToRestore: { rr: "ʁʁ" } }] : []),
      ...(doubleConsonants === "final" ? frFinalDoubleConsonantRules : []),
      ...(doubleConsonants ? frDoubleConsonantRules : []),
      ...bourg,
      // Restore "n"/"m" instead of tilde
      { ipaCharToBeReplaced: "̃", lettersToRestore: { n: "n", m: "m" } },
      // Restore "u"
      {
        ipaCharToBeReplaced: "w",
        lettersToRestore: oiO
          ? { u: "u", oi: "o", oî: "o", oy: "o" }
          : { u: "u", oi: "u", oî: "u", oy: "u" },
      },
      // Restore "o"
      { ipaCharToBeReplaced: "w", lettersToRestore: { o: "o" } },
      // Restore "e"
      { ipaCharToBeReplaced: "ø", lettersToRestore: { eu: "e" } },
      // Targets that write the e-muet apart from e (勒布朗, 르블랑, เลอ) keep ə
      ...(keepSchwa ? [] : [{ ipaCharToBeReplaced: "ə", lettersToRestore: { e: "e" } }]),
      // Restore "il"
      { ipaCharToBeReplaced: "ij$", lettersToRestore: { ille: "il", illes: "il" } },
      // Tilde with no n/m letter close enough (patients, temps) is still a nasal
    ])
      .replaceAll("\u0303", "n")
      .replace("\uE000", "ø")
      // A silent h between two of the same vowel would leave three in a row (Tahaa taaa)
      .replace(/([aeiouyɑɛɔøœə])\1\1/gu, "$1$1")
  );
};
