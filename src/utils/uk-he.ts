import { Text } from "types/languages";

export const ukHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ukIpaRules } = await import("constants/uk-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(ukIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
