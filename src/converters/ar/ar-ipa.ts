import { Text } from "types";

export const arIpa = async <T = Text>(
  text: Text,
  {
    dropLoneArticle = false,
    firstArticleE = false,
  }: { dropLoneArticle?: boolean | "all"; firstArticleE?: boolean } = {},
): Promise<T> => {
  const { mapText } = await import("helpers/convertText");
  const { arIpaMap, charMap, stemCharMap } = await import("data/ar/ar-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { arIpaRules } = await import("data/ar/ar-ipa.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { filterIpa } = await import("helpers/filterIpa");
  const { breakClusters } = await import("helpers/breakClusters");

  const transliterator = RBT.fromRules(arIpaRules);

  const PREFIXES = [
    "وال",
    "فال",
    "بال",
    "كال",
    "لل",
    "وب",
    "ول",
    "وك",
    "وف",
    "ال",
    "و",
    "ف",
    "ب",
    "ل",
    "ك",
    "س",
  ];

  const SUFFIXES = ["هم", "هن", "كم", "كن", "نا", "ها", "ه", "ك", "ي", "ة", "ات"];

  const MIN_STEM = 2;

  const normalize = (s: string): string => {
    return s.replace(/[\u064B-\u065F\u0670]/g, "");
  };

  const charFallback = (s: string): string => {
    return [...s].map((ch, i) => (i && /[أإ]/.test(ch) ? "ʔ" : "") + (charMap[ch] ?? ch)).join("");
  };

  const CONSONANT = /[بتثجحخدذرزسشصضطظعغفقكلمنه]/;

  const stemFallback = (s: string, afterArticle: boolean): string => {
    const chars = [...s];
    const diphthong =
      chars.length <= 5 &&
      /[يو]/.test(chars[1]) &&
      [chars[0], chars[2], chars[3]].every(ch => CONSONANT.test(ch ?? "")) &&
      !s.startsWith("بو");
    const segments = chars.map((ch, i) => {
      const prev = chars[i - 1];
      const next = chars[i + 1];
      const vowel = i > 0 && CONSONANT.test(prev) && (next === undefined || CONSONANT.test(next));
      if (diphthong && i === 1) return ch === "و" ? "aw" : "aj";
      if (ch === "و") return vowel ? "uː" : "w";
      if (ch === "ي") {
        if (vowel || (prev === "و" && next === undefined)) return "iː";
        if (i === 1 && prev === "إ" && CONSONANT.test(next ?? "")) return "ː";
        return i > 0 && CONSONANT.test(prev) && next === "ة" && i === chars.length - 2
          ? "ijj"
          : "j";
      }
      if (ch === "ا") return i ? "aː" : "a";
      return (
        ((i || afterArticle) && /[أإ]/.test(ch) ? "ʔ" : "") +
        (stemCharMap[ch] ?? charMap[ch] ?? ch) +
        (diphthong && i === 2 ? "a" : "")
      );
    });
    const isConsonant = (segment: string) => /\p{L}/u.test(segment) && !/[aiuةآ]/.test(segment);
    for (let i = segments.length - 1; i > 0; i--) {
      if (segments[i - 1] === "t" && segments[i] === "ʃ") segments.splice(i - 1, 2, "tʃ");
    }
    return breakClusters(segments, isConsonant, "a");
  };

  const ARTICLE_PREFIXES: [string, string][] = [
    ["وال", "wal"],
    ["فال", "fal"],
    ["بال", "bil"],
    ["كال", "kal"],
    ["لل", "lil"],
    ["ال", "al"],
  ];

  const prefixIPA = (pre: string): string =>
    pre.length === 3 ? ARTICLE_PREFIXES.find(([p]) => p === pre)![1] : charFallback(pre);

  const joinPrefix = (pre: string, stem: string, stemIPA: string): string => {
    const preIPA = prefixIPA(pre);
    return stem.startsWith("ال") && /[ai]$/.test(preIPA) && stemIPA.startsWith("a")
      ? preIPA + stemIPA.slice(1)
      : preIPA + stemIPA;
  };

  const compound = (word: string): string | undefined => {
    const chars = [...word];
    for (let i = chars.length - 3; i >= 3; i--) {
      const first = known(chars.slice(0, i).join(""));
      const second = first && known(chars.slice(i).join(""));
      if (first && second) return first + second.replace(/^ʔ/, "");
    }
    return undefined;
  };

  const wordFallback = (word: string): string => {
    for (const [pre, ipa] of ARTICLE_PREFIXES) {
      if (word.startsWith(pre) && word.length > pre.length + 1) {
        return ipa + stemFallback(word.slice(pre.length), true);
      }
    }
    return stemFallback(word, false);
  };

  const lookup = (s: string): string => {
    if (arIpaMap[s] || s.length < 3 || s.endsWith("ي")) return arIpaMap[s];
    const nisba = arIpaMap[s + "ي"];
    return nisba?.endsWith("iː") ? nisba.slice(0, -2).replace(/[ˈˌ](?=[^aiueoɛɔː]*$)/, "") : "";
  };

  const known = (s: string): string => filterIpa(lookup(s), s, "ar");

  const wordToIPA = (rawWord: string): string => {
    const word = normalize(rawWord);

    const direct = known(word);
    if (direct) return direct;

    for (const pre of PREFIXES) {
      if (!word.startsWith(pre)) continue;
      const stem = word.slice(pre.length);
      if (stem.length < MIN_STEM) continue;

      const stemIPA = known(stem);
      if (stemIPA) return joinPrefix(pre, stem, stemIPA);

      for (const suf of SUFFIXES) {
        if (!stem.endsWith(suf)) continue;
        const core = stem.slice(0, stem.length - suf.length);
        if (core.length < MIN_STEM) continue;

        const coreIPA = known(core);
        if (coreIPA) return joinPrefix(pre, core, coreIPA) + charFallback(suf);
      }
    }

    for (const suf of SUFFIXES) {
      if (!word.endsWith(suf)) continue;
      const stem = word.slice(0, word.length - suf.length);
      if (stem.length < MIN_STEM) continue;

      const stemIPA = known(stem);
      if (stemIPA) return stemIPA + charFallback(suf);
    }

    return compound(word) ?? wordFallback(word);
  };

  const ARTICLE = /^ال(?!له(م|$))../;

  const markArticle = (rawWord: string, lone: boolean): string => {
    const ipa = wordToIPA(rawWord);
    const mark = !lone ? "\uE001" : firstArticleE ? "\uE003" : "\uE002";
    return ARTICLE.test(normalize(rawWord)) ? mark + ipa : ipa;
  };

  const loneWords = async (text: string): Promise<boolean[]> => {
    const marked = await wordSplitter(text, "ar", word =>
      normalize(word).endsWith("ي") ? "\uE011" : "\uE010",
    );
    return marked.split(/[,;.]/).flatMap(part => {
      const words = part.match(/[\uE010\uE011]/g) ?? [];
      return words.map(
        (word, i) => word === "\uE010" && (firstArticleE ? i === 0 : words.length === 1),
      );
    });
  };

  const convert = async (text: string) => {
    const lone =
      dropLoneArticle !== "all" && (dropLoneArticle || firstArticleE) ? await loneWords(text) : [];
    let index = 0;
    const result = await wordSplitter(text, "ar", word =>
      markArticle(word, dropLoneArticle === "all" || !!lone[index++]),
    );
    return transliterator.transliterate(result);
  };

  return (await mapText(text, convert)) as T;
};
