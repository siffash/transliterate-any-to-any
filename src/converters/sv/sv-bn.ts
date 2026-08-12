import { Text } from "types";

export const svBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { svIpaRules } = await import("constants/sv-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(svIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
