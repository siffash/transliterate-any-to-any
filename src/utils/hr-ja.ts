import { Text } from "types/languages";

export const hrJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hrIpaRules } = await import("constants/hr-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(hrIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
