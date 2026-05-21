import { Text } from "types/languages";

export const plZh = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { plIpaRules } = await import("constants/pl-ipa.rules");
  const { ipaZhRules } = await import("constants/ipa-zh.rules");

  const transliterator = RBT.fromRules(plIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
