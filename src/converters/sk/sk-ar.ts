import { Text } from "types";

export const skAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { skIpaRules } = await import("constants/sk-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(skIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
