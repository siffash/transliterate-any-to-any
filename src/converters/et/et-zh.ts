import { Text } from "types";

export const etZh = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { etIpaRules } = await import("constants/et-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(etIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
