import { Text } from "types";

export const frIpa = async <T = Text>(text: Text, isNormalized: boolean): Promise<T> => {
  const { frIpaMap } = await import("data/fr/fr-ipa.map");
  const { RBT } = await import("helpers/rbt-distributor");
  const { frIpaRules } = await import("data/fr/fr-ipa.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { filterIpa } = await import("helpers/filterIpa");
  const { normalizerFrIpa } = await import("helpers/normalizerFrIpa");

  const transliterator = RBT.fromRules(frIpaRules);

  const convert = async (text: string) =>
    await wordSplitter(
      text,
      "fr",
      (word: string) => {
        word = word.toLocaleLowerCase("fr");
        const ipa = filterIpa(frIpaMap[word], word, "fr") || transliterator.transliterate(word);
        return isNormalized ? normalizerFrIpa(word, ipa) : ipa;
      },
      true,
    );

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
