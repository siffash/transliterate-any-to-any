import { Text } from "types/languages";

export const ruHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ruIpaRules } = await import("constants/ru-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(ruIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
