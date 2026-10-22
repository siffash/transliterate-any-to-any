import { Text } from "types";

export const frIpa = async <T = Text>(text: Text, velarA = false): Promise<T> => {
  const { frIpaMap } = await import("data/fr/fr-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { frIpaRules } = await import("data/fr/fr-ipa.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { filterIpa } = await import("helpers/filterIpa");
  const { normalizeFrIpa } = await import("helpers/normalizeFrIpa");

  const transliterator = RBT.fromRules(frIpaRules);

  const convert = async (text: string) =>
    await wordSplitter(
      text,
      "fr",
      (word: string) => {
        word = word.toLocaleLowerCase("fr");
        const ipa =
          (Object.prototype.hasOwnProperty.call(frIpaMap, word) &&
            filterIpa(frIpaMap[word], word, "fr")) ||
          transliterator.transliterate(word);
        return normalizeFrIpa(word, velarA ? ipa.replaceAll("ɑ̃", "ɑŋ") : ipa);
      },
      true,
    );

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
