import { Text } from "types/languages";

export const roAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { roIpaRules } = await import("constants/ro-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(roIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
