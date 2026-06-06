import { Text } from "types/languages";

export const fiHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { fiIpaRules } = await import("constants/fi-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(fiIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
