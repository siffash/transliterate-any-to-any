import { Text } from "types/languages";

export const nlAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { nlIpaRules } = await import("constants/nl-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(nlIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
