import { Text } from "types";

export const deHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { deIpaRules } = await import("constants/de-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(deIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
