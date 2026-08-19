import { Text } from "types";

export const lvBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvIpaRules } = await import("data/lv/lv-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(lvIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
