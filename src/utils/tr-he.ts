import { Text } from "types/languages";

export const trHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { trIpaRules } = await import("constants/tr-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(trIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
