import { Text } from "types";

export const deAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { deIpaRules } = await import("constants/de-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(deIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
