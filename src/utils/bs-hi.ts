import { Text } from "types/languages";

export const bsHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bsIpaRules } = await import("constants/bs-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(bsIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
