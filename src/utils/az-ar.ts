import { Text } from "types/languages";

export const azAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { azIpaRules } = await import("constants/az-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(azIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
