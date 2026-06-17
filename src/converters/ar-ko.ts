import { Text } from "types";

export const arKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { arIpaRules } = await import("constants/ar-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(arIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
