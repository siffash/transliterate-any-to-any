import { Text } from "types";

export const idBn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { idIpaRules } = await import("constants/id-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(idIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
