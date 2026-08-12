import { Text } from "types";

export const viBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viIpaRules } = await import("constants/vi-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(viIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
