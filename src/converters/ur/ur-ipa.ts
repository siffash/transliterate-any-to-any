import { Text } from "types";

export const urIpa = async <T = Text>(text: Text): Promise<T> => {
  const { urIpaMap } = await import("data/ur-ipa.map");
  const { RBT } = await import("helpers/rbt-distributor");
  const { urIpaRules } = await import("data/ur-ipa.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { filterIpa } = await import("helpers/filterIpa");

  const transliterator = RBT.fromRules(urIpaRules);

  const convert = async (text: string) =>
    await wordSplitter(
      text,
      "ur",
      (word: string) => filterIpa(urIpaMap[word], word, "ur") || transliterator.transliterate(word),
    );

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
