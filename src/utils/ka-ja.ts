import { Text } from "types/languages";

export const kaJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kaIpaRules } = await import("constants/ka-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(kaIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
