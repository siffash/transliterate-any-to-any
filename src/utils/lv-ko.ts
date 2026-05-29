import { Text } from "types/languages";

export const lvKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lvIpaRules } = await import("constants/lv-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(lvIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
