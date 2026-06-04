import { Text } from "types/languages";

export const idAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { idIpaRules } = await import("constants/id-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(idIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
