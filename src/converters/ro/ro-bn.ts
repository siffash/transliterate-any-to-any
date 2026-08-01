import { Text } from "types";

export const roBn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { roIpaRules } = await import("constants/ro-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(roIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
