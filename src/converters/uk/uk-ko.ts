import { Text } from "types";

export const ukKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ukIpaRules } = await import("constants/uk-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(ukIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
