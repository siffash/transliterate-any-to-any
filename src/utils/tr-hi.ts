import { Text } from "types/languages";

export const trHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { trIpaRules } = await import("constants/tr-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(trIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
