import { Text } from "types";

export const frIpa = async <T = Text>(text: Text, isNormalized: boolean): Promise<T> => {
  const { frIpaMap } = await import("constants/fr-ipa.map");
  const { RBT } = await import("icu-transliterator");
  const { frIpaRules } = await import("constants/fr-ipa.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { frIpaNormalizer } = await import("helpers/frIpaNormalizer");

  const transliterator = RBT.fromRules(frIpaRules);

  const convert = async (text: string) =>
    await wordSplitter(
      text,
      "fr",
      (word: string) => {
        word = word.toLocaleLowerCase("fr");
        const ipa = frIpaMap[word] || transliterator.transliterate(word);
        return isNormalized ? frIpaNormalizer(word, ipa) : ipa;
      },
      true,
    );

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
