import { Text } from "types/languages";

export const mtZh = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mtIpaRules } = await import("constants/mt-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(mtIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
