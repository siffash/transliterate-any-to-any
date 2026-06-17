import { Text } from "types";

export const hrAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hrIpaRules } = await import("constants/hr-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(hrIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
