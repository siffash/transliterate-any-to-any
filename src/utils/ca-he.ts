import { Text } from "types/languages";

export const caHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { caIpaRules } = await import("constants/ca-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(caIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
