import { Text } from "types/languages";

export const sqHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { sqIpaRules } = await import("constants/sq-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(sqIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
