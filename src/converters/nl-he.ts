import { Text } from "types";

export const nlHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { nlIpaRules } = await import("constants/nl-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(nlIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
