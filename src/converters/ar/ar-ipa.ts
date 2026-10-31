import { Text } from "types";

export const arIpa = async <T = Text>(text: Text): Promise<T> => {
  const { arIpaMap, charMap, stemCharMap } = await import("data/ar/ar-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { arIpaRules } = await import("data/ar/ar-ipa.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { filterIpa } = await import("helpers/filterIpa");

  const transliterator = RBT.fromRules(arIpaRules);

  // Prefixes longest-first - order is critical for greedy matching
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

  const MIN_STEM = 2; // never strip if remaining stem would be shorter

  const normalize = (s: string): string => {
    return s.replace(/[\u064B-\u065F\u0670]/g, ""); // strip tashkeel
  };

  const charFallback = (s: string): string => {
    // A hamza carrier inside a word is a glottal stop (الأفق → alʔafq); a word-initial one stays a plain vowel
    return [...s].map((ch, i) => (i && /[أإ]/.test(ch) ? "ʔ" : "") + (charMap[ch] ?? ch)).join("");
  };

  const CONSONANT = /[بتثجحخدذرزسشصضطظعغفقكلمنه]/;

  // A whole word missing from the map: ا inside it is long; و/ي between consonants (or after one at the end) are
  // the long vowels uː/iː (محمود, سعيد), elsewhere the glides w/j; -ية is -ijja
  const stemFallback = (s: string, afterArticle: boolean): string => {
    const chars = [...s];
    return chars
      .map((ch, i) => {
        const prev = chars[i - 1];
        const next = chars[i + 1];
        const vowel = i > 0 && CONSONANT.test(prev) && (next === undefined || CONSONANT.test(next));
        if (ch === "و") return vowel ? "uː" : "w";
        if (ch === "ي") {
          if (vowel) return "iː";
          return i > 0 && CONSONANT.test(prev) && next === "ة" && i === chars.length - 2
            ? "ijj"
            : "j";
        }
        if (ch === "ا") return i ? "aː" : "a";
        return (
          ((i || afterArticle) && /[أإ]/.test(ch) ? "ʔ" : "") +
          (stemCharMap[ch] ?? charMap[ch] ?? ch)
        );
      })
      .join("");
  };

  // The article, alone or after a one-letter prefix (للخدمات → lilxdmaːt)
  const ARTICLE_PREFIXES: [string, string][] = [
    ["وال", "wal"],
    ["فال", "fal"],
    ["بال", "bil"],
    ["كال", "kal"],
    ["لل", "lil"],
    ["ال", "al"],
  ];

  // وال، فال، بال، كال: charFallback would read the alif and give wali-, bia-li- (والقاهرة → Valikahira)
  const prefixIPA = (pre: string): string =>
    pre.length === 3 ? ARTICLE_PREFIXES.find(([p]) => p === pre)![1] : charFallback(pre);

  // A prefix vowel elides the article's a: بالله → billaːh, وبالله → wabillaːh
  const joinPrefix = (pre: string, stem: string, stemIPA: string): string => {
    const preIPA = prefixIPA(pre);
    return stem.startsWith("ال") && /[ai]$/.test(preIPA) && stemIPA.startsWith("a")
      ? preIPA + stemIPA.slice(1)
      : preIPA + stemIPA;
  };

  const wordFallback = (word: string): string => {
    for (const [pre, ipa] of ARTICLE_PREFIXES) {
      if (word.startsWith(pre) && word.length > pre.length + 1) {
        return ipa + stemFallback(word.slice(pre.length), true);
      }
    }
    return stemFallback(word, false);
  };

  const wordToIPA = (rawWord: string): string => {
    const word = normalize(rawWord);

    // 1. Full word - best accuracy (preserves sun-letter assimilation etc.)
    const direct = filterIpa(arIpaMap[word], word, "ar");
    if (direct) return direct;

    // 2. Prefix only
    for (const pre of PREFIXES) {
      if (!word.startsWith(pre)) continue;
      const stem = word.slice(pre.length);
      if (stem.length < MIN_STEM) continue;

      const stemIPA = filterIpa(arIpaMap[stem], stem, "ar");
      if (stemIPA) return joinPrefix(pre, stem, stemIPA);

      // 3. Prefix + suffix
      for (const suf of SUFFIXES) {
        if (!stem.endsWith(suf)) continue;
        const core = stem.slice(0, stem.length - suf.length);
        if (core.length < MIN_STEM) continue;

        const coreIPA = filterIpa(arIpaMap[core], core, "ar");
        if (coreIPA) return joinPrefix(pre, core, coreIPA) + charFallback(suf);
      }
    }

    // 4. Suffix only (no prefix)
    for (const suf of SUFFIXES) {
      if (!word.endsWith(suf)) continue;
      const stem = word.slice(0, word.length - suf.length);
      if (stem.length < MIN_STEM) continue;

      const stemIPA = filterIpa(arIpaMap[stem], stem, "ar");
      if (stemIPA) return stemIPA + charFallback(suf);
    }

    // 5. Character-by-character fallback
    return wordFallback(word);
  };

  // Marks words with the article; ar-ipa.rules writes a hyphen after it (aʃ-ʃams, an-naːsˤir). الله stays one word
  const ARTICLE = /^ال(?!له(م|$))../;

  const markArticle = (rawWord: string): string => {
    const ipa = wordToIPA(rawWord);
    return ARTICLE.test(normalize(rawWord)) ? "\uE001" + ipa : ipa;
  };

  const convert = async (text: string) => {
    const result = await wordSplitter(text, "ar", markArticle);
    return transliterator.transliterate(result);
  };

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
