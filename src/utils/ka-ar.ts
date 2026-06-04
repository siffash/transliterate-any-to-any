import { Text } from "types/languages";

export const kaAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kaIpaRules } = await import("constants/ka-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(kaIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
