import { Text } from "types/languages";

export const ruKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ruIpaRules } = await import("constants/ru-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(ruIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
