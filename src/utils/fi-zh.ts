import { Text } from "types/languages";

export const fiZh = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { fiIpaRules } = await import("constants/fi-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(fiIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
