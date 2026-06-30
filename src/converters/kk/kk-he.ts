import { Text } from "types";

export const kkHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kkIpaRules } = await import("constants/kk-ipa.rules");
  const { ipaHeRules } = await import("constants/ipa-he.rules");

  const transliterator = RBT.fromRules(kkIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
