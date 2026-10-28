import { Text } from "types";
import type { RestoreIpaRule } from "helpers/restoreLettersInIpa";

export const enIpa = async <T = Text>(
  text: Text,
  extraRestoreRules: RestoreIpaRule[] = [],
): Promise<T> => {
  const { getPhonemize, getPhonemizeEnG2P } = await import("helpers/getPhonemize");
  const { toIPA } = await getPhonemize();
  const { filterIpa } = await import("helpers/filterIpa");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeEnIpa } = await import("helpers/normalizeEnIpa");
  const { RBT } = await import("helpers/rbt");
  const { enIpaRules } = await import("data/en/en-ipa.rules");

  const transliterator = RBT.fromRules(enIpaRules);

  // toIPA looks each word's language up in a plain object, so "constructor" finds
  // Object.prototype.constructor and throws: such words go to the English G2P directly
  const predict = async (word: string) => {
    // phonemize reads the Irish O' as /oʊ/ (O'Hara → Оухара, オウハラ), but O’Hara like Ohara (Охара, オハラ, 奥哈拉)
    word = word.replaceAll("’", "'").replace(/^(o)'(?=\p{L})/iu, "$1’");
    if (!(word.toLowerCase() in Object.prototype)) {
      return toIPA(word);
    }
    const { EnglishG2P } = await getPhonemizeEnG2P();
    return new EnglishG2P().predict(word, "en") ?? word;
  };

  const convert = async (text: string) =>
    await wordSplitter(text, "en", async (word: string) => {
      const ipa = filterIpa(await predict(word), word, "en");
      return transliterator.transliterate(normalizeEnIpa(word, ipa, extraRestoreRules));
    });

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
