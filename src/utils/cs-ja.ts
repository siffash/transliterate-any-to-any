import { Text } from "types/languages";

export const csJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { csIpaRules } = await import("constants/cs-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(csIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
