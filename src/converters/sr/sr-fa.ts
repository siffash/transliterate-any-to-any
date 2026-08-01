import { Text } from "types";

export const srFa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { srIpaRules } = await import("constants/sr-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(srIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
