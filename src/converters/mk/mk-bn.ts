import { Text } from "types";

export const mkBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkIpaRules } = await import("constants/mk-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(mkIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
