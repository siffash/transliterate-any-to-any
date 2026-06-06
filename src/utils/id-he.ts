import { Text } from "types/languages";

export const idHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { idIpaRules } = await import("constants/id-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(idIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
