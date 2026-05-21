import { Text } from "types/languages";

export const nlJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { nlIpaRules } = await import("constants/nl-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(nlIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
