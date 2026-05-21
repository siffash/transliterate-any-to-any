import { Text } from "types/languages";

export const kaZh = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kaIpaRules } = await import("constants/ka-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(kaIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
