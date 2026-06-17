import { Text } from "types";

export const srAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { srIpaRules } = await import("constants/sr-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(srIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
