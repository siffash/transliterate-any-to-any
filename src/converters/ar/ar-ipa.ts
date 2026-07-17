import { Text } from "types";

export const arIpa = async <T = Text>(text: Text): Promise<T> => {
  const { arIpaMap, charMap } = await import("constants/ar-ipa.map");
  const { RBT } = await import("icu-transliterator");
  const { arIpaRules } = await import("constants/ar-ipa.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

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
    return [...s].map(ch => charMap[ch] ?? ch).join("");
  };

  const wordToIPA = (rawWord: string): string => {
    const word = normalize(rawWord);

    // 1. Full word - best accuracy (preserves sun-letter assimilation etc.)
    const direct = arIpaMap[word];
    if (direct) return direct;

    // 2. Prefix only
    for (const pre of PREFIXES) {
      if (!word.startsWith(pre)) continue;
      const stem = word.slice(pre.length);
      if (stem.length < MIN_STEM) continue;

      const stemIPA = arIpaMap[stem];
      if (stemIPA) return charFallback(pre) + stemIPA;

      // 3. Prefix + suffix
      for (const suf of SUFFIXES) {
        if (!stem.endsWith(suf)) continue;
        const core = stem.slice(0, stem.length - suf.length);
        if (core.length < MIN_STEM) continue;

        const coreIPA = arIpaMap[core];
        if (coreIPA) return charFallback(pre) + coreIPA + charFallback(suf);
      }
    }

    // 4. Suffix only (no prefix)
    for (const suf of SUFFIXES) {
      if (!word.endsWith(suf)) continue;
      const stem = word.slice(0, word.length - suf.length);
      if (stem.length < MIN_STEM) continue;

      const stemIPA = arIpaMap[stem];
      if (stemIPA) return stemIPA + charFallback(suf);
    }

    // 5. If it's a long word - try to split it in different parts, and check each half
    if (word.length >= MIN_STEM * 2) {
      let count = MIN_STEM;
      while (count <= word.length - MIN_STEM) {
        const wordHalf1 = word.slice(0, count);
        const wordHalf2 = word.slice(count);
        const ipaHalf1 = arIpaMap[wordHalf1];
        const ipaHalf2 = arIpaMap[wordHalf2];
        if (ipaHalf1 || ipaHalf2) {
          return (ipaHalf1 || wordToIPA(wordHalf1)) + (ipaHalf2 || wordToIPA(wordHalf2));
        }
        count++;
      }
    }

    // 6. Character-by-character fallback
    return charFallback(word);
  };

  const convert = async (text: string) => {
    const result = await wordSplitter(text, "ar", wordToIPA);
    return transliterator.transliterate(result);
  };

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
