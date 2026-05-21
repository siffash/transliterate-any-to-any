import { Text } from "types/languages";

export const bgJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bgIpaRules } = await import("constants/bg-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(bgIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
