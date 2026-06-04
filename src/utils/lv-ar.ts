import { Text } from "types/languages";

export const lvAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lvIpaRules } = await import("constants/lv-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(lvIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
