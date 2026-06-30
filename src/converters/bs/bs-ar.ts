import { Text } from "types";

export const bsAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bsIpaRules } = await import("constants/bs-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(bsIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
