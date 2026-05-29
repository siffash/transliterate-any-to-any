import { Text } from "types/languages";

export const caKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { caIpaRules } = await import("constants/ca-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(caIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
