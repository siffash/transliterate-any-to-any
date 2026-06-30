import { Text } from "types";

export const lbAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lbIpaRules } = await import("constants/lb-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(lbIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
