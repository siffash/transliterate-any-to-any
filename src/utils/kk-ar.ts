import { Text } from "types/languages";

export const kkAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kkIpaRules } = await import("constants/kk-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(kkIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
