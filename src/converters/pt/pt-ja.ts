import { Text } from "types";

export const ptJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ptIpaRules } = await import("constants/pt-ipa.rules");
  const { ipaJaRules } = await import("constants/ipa-ja.rules");

  const transliterator = RBT.fromRules(ptIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
