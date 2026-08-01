import { Text } from "types";

export const ruFa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ruIpaRules } = await import("constants/ru-ipa.rules");
  const { ipaFaRules } = await import("constants/ipa-fa.rules");

  const transliterator = RBT.fromRules(ruIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
