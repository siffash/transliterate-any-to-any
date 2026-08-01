import { Text } from "types";

export const sqUr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { sqIpaRules } = await import("constants/sq-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(sqIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
