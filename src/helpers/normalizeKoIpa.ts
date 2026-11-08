// The Korean G2P of "phonemize" has no ㅛ (yo) and ㅠ (yu) in its vowel table, so it leaves these
// syllables half-romanized: 교 → gyo, 죠 → jyo, 유 → yu. Each romanized initial is converted here
// the way the G2P converts it in the other syllables: [at the start of a word, inside a word].
const INITIALS: Record<string, [string, string]> = {
  g: ["k", "ɡ"],
  kk: ["k͈", "k͈"],
  k: ["kʰ", "kʰ"],
  n: ["n", "n"],
  d: ["t", "d"],
  tt: ["t͈", "t͈"],
  t: ["tʰ", "tʰ"],
  r: ["l", "ɾ"],
  l: ["l", "ɾ"],
  m: ["m", "m"],
  b: ["p", "b"],
  pp: ["p͈", "p͈"],
  p: ["pʰ", "pʰ"],
  s: ["s", "s"],
  ss: ["s͈", "s͈"],
  j: ["tɕ", "dʑ"],
  jj: ["tɕ͈", "tɕ͈"],
  ch: ["tɕʰ", "tɕʰ"],
  h: ["h", "h"],
};

// The sound of a plain stop inside a word, after a vowel or a sonorant. ㄱ isn't voiced: these targets'
// Wikipedias mostly write the given name with k (Ban Ki-moon, Choi Kyu-hah), but j (Kim Jong-un)
const VOICED: Record<string, string> = { t: "d", p: "b", tɕ: "dʑ" };

const fixYVowels = (ipa: string): string =>
  ipa.replace(
    /(kk|tt|pp|ss|jj|ch|[gkndtrlmbpsjh])?y(?=[ou])/g,
    (_, initial: string | undefined, offset: number) => {
      if (!initial) {
        return "j";
      }
      const prev = ipa[offset - 1] ?? "";
      const [atStart, inWord] = INITIALS[initial];
      // ㄹ is a flap only between vowels, as in the G2P (일요일 → iɾjoil, but 알료 → alljo)
      if (initial === "l" || initial === "r") {
        return (/[aɛʌeouɯi]/.test(prev) ? inWord : atStart) + "j";
      }
      return (/[\p{L}\p{M}]/u.test(prev) ? inWord : atStart) + "j";
    },
  );

/*
 * Fixes the IPA of Korean syllables with ㅛ and ㅠ: 교 → kjo, 이규 → iɡju, 죠 → tɕjo, 유 → ju.
 * A given name split off with "~" (see normalizeKo) keeps its first sound from inside the name:
 * kim~ tɕʌŋɯn → kim~dʑʌŋɯn (Kim Jong-un), but pak̚~ tɕisʌŋ → pak̚~tɕisʌŋ (Park Ji-sung) and
 * pan~ kimun → pan~kimun (Ban Ki-moon). ㅢ after ㅎ is read [i], as the standard pronunciation has it:
 * 영희 → jʌŋhi (Ёнхи, ヨンヒ), not jʌŋhɰi (يانغهغي).
 * @param ipa - The IPA from the Korean G2P.
 * @returns the fixed IPA.
 */
export const normalizeKoIpa = (ipa: string): string =>
  fixYVowels(ipa)
    .replace(/hɰ(?=i)/g, "h")
    // The syllables of a given name (min~ kju, tu- li) keep their sounds from inside the word,
    // with ㄱ voiced and ㄹ a flap between vowels: Min Gyu, Du Ri
    .replace(/(?<=~ ?[^\s~-]*[aɛʌeouɯimnŋl])([~-]) k(?!ʰ|͈)/g, "$1 ɡ")
    .replace(/(?<=~ ?[^\s~-]*[aɛʌeouɯi])([~-]) l/g, "$1 ɾ")
    .replace(
      /(?<=[aɛʌeouɯimnŋl])(~|(?<=~ ?[^\s~-]*)-) (tɕ|[tp])(?!ʰ|͈|ɕ)/g,
      (_, separator: string, initial: string) => `${separator}${VOICED[initial]}`,
    )
    .replace(/~ |(?<=~ ?[^\s~-]*)- /g, separator => separator[0]);
