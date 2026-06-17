import { Text } from "types";

export const csHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { csIpaRules } = await import("constants/cs-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(csIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
