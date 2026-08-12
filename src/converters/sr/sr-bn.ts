import { Text } from "types";

export const srBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { srIpaRules } = await import("constants/sr-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(srIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
