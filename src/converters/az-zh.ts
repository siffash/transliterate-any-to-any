import { Text } from "types";

export const azZh = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { azIpaRules } = await import("constants/az-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(azIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
