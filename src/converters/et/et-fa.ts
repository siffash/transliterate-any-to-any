import { Text } from "types";

export const etFa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { etIpaRules } = await import("constants/et-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(etIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
