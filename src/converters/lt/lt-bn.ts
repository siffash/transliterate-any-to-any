import { Text } from "types";

export const ltBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ltIpaRules } = await import("constants/lt-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(ltIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
