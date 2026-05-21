import { Text } from "types/languages";

export const idJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { idIpaRules } = await import("constants/id-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(idIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
