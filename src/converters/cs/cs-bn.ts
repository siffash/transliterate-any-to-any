import { Text } from "types";

export const csBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { csIpaRules } = await import("constants/cs-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(csIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
