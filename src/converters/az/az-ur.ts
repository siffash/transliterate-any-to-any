import { Text } from "types";

export const azUr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { azIpaRules } = await import("constants/az-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(azIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
