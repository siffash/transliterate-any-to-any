import { Text } from "types";

export const caBn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { caIpaRules } = await import("constants/ca-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(caIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
