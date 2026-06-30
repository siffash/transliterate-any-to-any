import { Text } from "types";

export const esHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { esIpaRules } = await import("constants/es-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(esIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
