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

/*
 * Fixes the IPA of Korean syllables with ㅛ and ㅠ: 교 → kjo, 이규 → iɡju, 죠 → tɕjo, 유 → ju.
 * @param ipa - The IPA from the Korean G2P.
 * @returns the fixed IPA.
 */
export const normalizeKoIpa = (ipa: string): string =>
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
