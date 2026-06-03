import { Text } from "types/languages";

export const nlHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { nlIpaRules } = await import("constants/nl-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(nlIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
