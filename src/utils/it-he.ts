import { Text } from "types/languages";

export const itHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { itIpaRules } = await import("constants/it-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(itIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
