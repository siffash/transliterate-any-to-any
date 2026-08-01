import { Text } from "types";

export const lbFa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lbIpaRules } = await import("constants/lb-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(lbIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
