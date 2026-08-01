import { Text } from "types";

export const huBn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { huIpaRules } = await import("constants/hu-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(huIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
