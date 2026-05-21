import { Text } from "types/languages";

export const arJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { arIpaRules } = await import("constants/ar-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(arIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
