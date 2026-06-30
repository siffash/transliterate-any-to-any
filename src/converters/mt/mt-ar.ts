import { Text } from "types";

export const mtAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mtIpaRules } = await import("constants/mt-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(mtIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
