import { Text } from "types";

export const huBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { huIpaRules } = await import("data/hu/hu-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(huIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
