import { Text } from "types/languages";

export const srHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { srIpaRules } = await import("constants/sr-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(srIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
