import { Text } from "types";

export const esBn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { esIpaRules } = await import("constants/es-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(esIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
