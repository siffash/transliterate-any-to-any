import { Text } from "types";

export const deZh = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { deIpaRules } = await import("constants/de-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(deIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
