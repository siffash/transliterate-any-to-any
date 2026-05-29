import { Text } from "types/languages";

export const kkKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kkIpaRules } = await import("constants/kk-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(kkIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
