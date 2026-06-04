import { Text } from "types/languages";

export const trAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { trIpaRules } = await import("constants/tr-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(trIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
