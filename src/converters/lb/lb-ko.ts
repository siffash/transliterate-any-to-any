import { Text } from "types";

export const lbKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lbIpaRules } = await import("constants/lb-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(lbIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
