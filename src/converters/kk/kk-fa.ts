import { Text } from "types";

export const kkFa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kkIpaRules } = await import("constants/kk-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(kkIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
