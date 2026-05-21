import { Text } from "types/languages";

export const csZh = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { csIpaRules } = await import("constants/cs-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(csIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
