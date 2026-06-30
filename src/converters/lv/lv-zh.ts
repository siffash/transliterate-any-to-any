import { Text } from "types";

export const lvZh = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lvIpaRules } = await import("constants/lv-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(lvIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
