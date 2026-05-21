import { Text } from "types/languages";

export const bsJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bsIpaRules } = await import("constants/bs-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(bsIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
