import { Text } from "types/languages";

export const etHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { etIpaRules } = await import("constants/et-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(etIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
