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
      if (initial === "l" || initial === "r") {
        return (/[aɛʌeouɯi]/.test(prev) ? inWord : atStart) + "j";
      }
      return (/[\p{L}\p{M}]/u.test(prev) ? inWord : atStart) + "j";
    },
  );

export const normalizeKoIpa = (ipa: string): string =>
  fixYVowels(ipa)
    .replace(/hɰ(?=i)/g, "h")
    .replace(/(?<=~ ?[^\s~-]*[aɛʌeouɯimnŋl])([~-]) k(?!ʰ|͈)/g, "$1 ɡ")
    .replace(/(?<=~ ?[^\s~-]*[aɛʌeouɯi])([~-]) l/g, "$1 ɾ")
    .replace(
      /(?<=[aɛʌeouɯimnŋl])(~|(?<=~ ?[^\s~-]*)-) (tɕ|[tp])(?!ʰ|͈|ɕ)/g,
      (_, separator: string, initial: string) => `${separator}${VOICED[initial]}`,
    )
    .replace(/~ |(?<=~ ?[^\s~-]*)- /g, separator => separator[0]);
