import { Text } from "types";

export const azBn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { azIpaRules } = await import("constants/az-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(azIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
