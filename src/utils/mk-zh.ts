import { Text } from "types/languages";

export const mkZh = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mkIpaRules } = await import("constants/mk-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(mkIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
