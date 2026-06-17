import { Text } from "types";

export const arHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { arIpaRules } = await import("constants/ar-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(arIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
