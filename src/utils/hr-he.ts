import { Text } from "types/languages";

export const hrHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hrIpaRules } = await import("constants/hr-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(hrIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
