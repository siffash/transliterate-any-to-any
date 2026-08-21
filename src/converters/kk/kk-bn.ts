import { Text } from "types";

export const kkBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkIpaRules } = await import("data/kk/kk-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(kkIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
