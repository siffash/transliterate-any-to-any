import { Text } from "types";

export const sqAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { sqIpaRules } = await import("constants/sq-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(sqIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
