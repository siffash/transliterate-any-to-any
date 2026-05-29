import { Text } from "types/languages";

export const etKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { etIpaRules } = await import("constants/et-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(etIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
