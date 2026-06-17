import { Text } from "types";

export const mkHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mkIpaRules } = await import("constants/mk-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(mkIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
