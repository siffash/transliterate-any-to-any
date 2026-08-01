import { Text } from "types";

export const urIpa = async <T = Text>(text: Text): Promise<T> => {
  const { urIpaMap } = await import("constants/ur-ipa.map");
  const { RBT } = await import("icu-transliterator");
  const { urIpaRules } = await import("constants/ur-ipa.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(urIpaRules);

  const convert = async (text: string) =>
    await wordSplitter(
      text,
      "ur",
      (word: string) => urIpaMap[word] || transliterator.transliterate(word),
    );

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
