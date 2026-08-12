import { Text } from "types";

export const kkBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkIpaRules } = await import("data/kk-ipa.rules");
  const { ipaBnRules } = await import("data/ipa-bn.rules");

  const transliterator = RBT.fromRules(kkIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
