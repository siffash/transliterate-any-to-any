import { Text } from "types";

export const enIpa = async <T = Text>(text: Text): Promise<T> => {
  const { getPhonemize } = await import("helpers/getPhonemize");
  const { toIPA } = await getPhonemize();
  const { filterIpa } = await import("helpers/filterIpa");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizerEnIpa } = await import("helpers/normalizerEnIpa");

  const convert = async (text: string) =>
    await wordSplitter(text, "en", (word: string) => {
      const ipa = filterIpa(toIPA(word), word, "en");
      return normalizerEnIpa(word, ipa);
    });

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
