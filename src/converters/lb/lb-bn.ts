import { Text } from "types";

export const lbBn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lbIpaRules } = await import("constants/lb-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(lbIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
