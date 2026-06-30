import { Text } from "types";

export const ukHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ukIpaRules } = await import("constants/uk-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(ukIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
