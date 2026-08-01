import { Text } from "types";

export const trBn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { trIpaRules } = await import("constants/tr-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(trIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
