import { Text } from "types/languages";

export const huJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { huIpaRules } = await import("constants/hu-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(huIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
