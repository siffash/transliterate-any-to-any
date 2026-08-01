import { Text } from "types";

export const itBn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { itIpaRules } = await import("constants/it-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(itIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
