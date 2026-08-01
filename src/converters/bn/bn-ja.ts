import { Text } from "types";

export const bnJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
