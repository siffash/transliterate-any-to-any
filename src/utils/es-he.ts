import { Text } from "types/languages";

export const esHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { esIpaRules } = await import("constants/es-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(esIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
