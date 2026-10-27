import { Text } from "types";

export const faIpaUvular = async <T = Text>(text: Text): Promise<T> => {
  const { faIpaMap } = await import("data/fa/fa-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { faIpaRules } = await import("data/fa/fa-ipa.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { filterIpa } = await import("helpers/filterIpa");

  const transliterator = RBT.fromRules(faIpaRules);

  const toIpa = (word: string) =>
    filterIpa(faIpaMap[word], word, "fa") || transliterator.transliterate(word);

  const convert = async (text: string) =>
    await wordSplitter(text, "fa", (word: string) =>
      word.includes("\u200c") && !faIpaMap[word]
        ? word
            .split("\u200c")
            .map((part, i) => (i ? toIpa(part).replace(/^ʔ/, "") : toIpa(part)))
            .join("")
        : toIpa(word),
    );

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};

export const faIpa = async <T = Text>(text: Text): Promise<T> => {
  const { RBT } = await import("helpers/rbt");
  const { faIpaQRules } = await import("data/fa/fa-ipa_q.rules");

  const transliterator = RBT.fromRules(faIpaQRules);

  if (typeof text === "string") {
    return transliterator.transliterate(await faIpaUvular<string>(text)) as T;
  } else {
    const ipaArray = await faIpaUvular<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa)) as T;
  }
};
