import { Text } from "types/languages";

export const ptHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ptIpaRules } = await import("constants/pt-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
