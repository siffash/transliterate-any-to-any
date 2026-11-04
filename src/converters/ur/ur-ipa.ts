import { Text } from "types";

export const urIpa = async <T = Text>(text: Text): Promise<T> => {
  const { urIpaMap } = await import("data/ur/ur-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { urIpaRules } = await import("data/ur/ur-ipa.rules");
  const { urNormRules } = await import("data/ur/ur_norm.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { filterIpa } = await import("helpers/filterIpa");

  const transliterator = RBT.fromRules(urIpaRules);
  const normalizer = RBT.fromRules(urNormRules);

  // Arabic spells an initial i- with a hamza below (إبراهيم), the map with a plain alef (ابراہیم)
  const lookup = (word: string) => urIpaMap[word] ?? urIpaMap[word.replace(/^إ/, "ا")];

  const convert = async (text: string) =>
    await wordSplitter(normalizer.transliterate(text), "ur", (word: string) =>
      (filterIpa(lookup(word), word, "ur") || transliterator.transliterate(word))
        .replaceAll("ə\u0303", "ɐ\u0303")
        .replaceAll("ə", "a"),
    );

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
