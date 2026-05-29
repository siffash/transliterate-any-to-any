import { Text } from "types/languages";

export const azKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { azIpaRules } = await import("constants/az-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(azIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
