import { Text } from "types/languages";

export const sqHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { sqIpaRules } = await import("constants/sq-ipa.rules");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(sqIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
