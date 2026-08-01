import { Text } from "types";

export const kaFa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kaIpaRules } = await import("constants/ka-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(kaIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
