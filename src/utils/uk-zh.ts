import { Text } from "types/languages";

export const ukZh = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ukIpaRules } = await import("constants/uk-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(ukIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
