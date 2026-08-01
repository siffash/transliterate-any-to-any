import { Text } from "types";

export const frIpa = async <T = Text>(text: Text): Promise<T> => {
  const { frIpaMap } = await import("constants/fr-ipa.map");
  const { RBT } = await import("icu-transliterator");
  const { frIpaRules } = await import("constants/fr-ipa.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(frIpaRules);

  const convert = async (text: string) =>
    await wordSplitter(
      text,
      "fr",
      (word: string) =>
        frIpaMap[word.toLocaleLowerCase("fr")] || transliterator.transliterate(word),
      true,
    );

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
