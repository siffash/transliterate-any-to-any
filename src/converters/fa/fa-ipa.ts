import { Text } from "types";

export const faIpa = async <T = Text>(text: Text): Promise<T> => {
  const { faIpaMap } = await import("constants/fa-ipa.map");
  const { RBT } = await import("helpers/rbt-distributor");
  const { faIpaRules } = await import("constants/fa-ipa.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(faIpaRules);

  const convert = async (text: string) =>
    await wordSplitter(
      text,
      "fa",
      (word: string) => faIpaMap[word] || transliterator.transliterate(word),
    );

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
