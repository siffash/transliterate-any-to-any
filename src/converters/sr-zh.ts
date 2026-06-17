import { Text } from "types";

export const srZh = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { srIpaRules } = await import("constants/sr-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(srIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
