import { Text } from "types/languages";

export const lvJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lvIpaRules } = await import("constants/lv-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(lvIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
