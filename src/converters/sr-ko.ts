import { Text } from "types";

export const srKo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { srIpaRules } = await import("constants/sr-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(srIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
