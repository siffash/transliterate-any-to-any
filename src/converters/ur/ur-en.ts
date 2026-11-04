import { Text } from "types";

export const urEn = async <T = Text>(text: Text): Promise<T> => {
  const { urIpaMap } = await import("data/ur/ur-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaEnRules } = await import("data/ipa/ipa-en.rules");
  const { urEnRules } = await import("data/ur/ur-en.rules");
  const { urNormRules } = await import("data/ur/ur_norm.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { filterIpa } = await import("helpers/filterIpa");

  const transliteratorIpa = RBT.fromRules(ipaAspHRules + ipaEnRules + "::Title;");
  const transliteratorEn = RBT.fromRules(urEnRules);
  const normalizer = RBT.fromRules(urNormRules);

  // Arabic spells an initial i- with a hamza below (إبراهيم), the map with a plain alef (ابراہیم)
  const lookup = (word: string) => urIpaMap[word] ?? urIpaMap[word.replace(/^إ/, "ا")];

  const convert = async (text: string) =>
    await wordSplitter(normalizer.transliterate(text), "ur", (word: string) => {
      const ipa = filterIpa(lookup(word), word, "ur")
        ?.replaceAll("ə\u0303", "ɐ\u0303")
        .replaceAll("ə", "a");
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
