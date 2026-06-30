import { Text } from "types";

export const lbHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lbIpaRules } = await import("constants/lb-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(lbIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
