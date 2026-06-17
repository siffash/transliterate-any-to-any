import { Text } from "types";

export const csKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { csIpaRules } = await import("constants/cs-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(csIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
