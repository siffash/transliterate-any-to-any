import { Text } from "types";

export const enIpa = async <T = Text>(text: Text): Promise<T> => {
  const { getPhonemize, getPhonemizeEnG2P } = await import("helpers/getPhonemize");
  const { toIPA } = await getPhonemize();
  const { filterIpa } = await import("helpers/filterIpa");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeEnIpa } = await import("helpers/normalizeEnIpa");

  // toIPA looks each word's language up in a plain object, so "constructor" finds
  // Object.prototype.constructor and throws: such words go to the English G2P directly
  const predict = async (word: string) => {
    if (!(word.toLowerCase() in Object.prototype)) {
      return toIPA(word);
    }
    const { EnglishG2P } = await getPhonemizeEnG2P();
    return new EnglishG2P().predict(word, "en") ?? word;
  };

  const convert = async (text: string) =>
    await wordSplitter(text, "en", async (word: string) => {
      const ipa = filterIpa(await predict(word), word, "en");
      return normalizeEnIpa(word, ipa);
    });

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
