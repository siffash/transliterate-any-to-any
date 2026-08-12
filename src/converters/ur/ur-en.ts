import { Text } from "types";

export const urEn = async <T = Text>(text: Text): Promise<T> => {
  const { urIpaMap } = await import("data/ur-ipa.map");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaEnRules } = await import("data/ipa-en.rules");
  const { urEnRules } = await import("data/ur-en.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { filterIpa } = await import("helpers/filterIpa");

  const transliteratorIpa = RBT.fromRules(ipaEnRules + "::Title;");
  const transliteratorEn = RBT.fromRules(urEnRules);

  const convert = async (text: string) =>
    await wordSplitter(text, "ur", (word: string) => {
      const ipa = filterIpa(urIpaMap[word]);
      if (ipa) {
        return transliteratorIpa.transliterate(ipa);
      } else {
        return transliteratorEn.transliterate(word);
      }
    });

  if (typeof text === "string") {
    return (await convert(text)) as T;
  } else {
    return (await Promise.all(text.map(convert))) as T;
  }
};
