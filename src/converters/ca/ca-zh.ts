import { Text } from "types";

export const caZh = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { caIpaRules } = await import("constants/ca-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(caIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
