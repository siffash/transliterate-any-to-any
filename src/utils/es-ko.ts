import { Text } from "types/languages";

export const esKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { esIpaRules } = await import("constants/es-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(esIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
