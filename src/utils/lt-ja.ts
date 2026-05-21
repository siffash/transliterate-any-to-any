import { Text } from "types/languages";

export const ltJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ltIpaRules } = await import("constants/lt-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(ltIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
