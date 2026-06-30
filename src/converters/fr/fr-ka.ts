import { Text } from "types";

export const frKa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { frIpaRules } = await import("constants/fr-ipa.rules");
  const { ipaKaRules } = await import("constants/ipa-ka.rules");

  const transliterator = RBT.fromRules(frIpaRules + ipaKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
