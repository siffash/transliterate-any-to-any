import { Text } from "types";

export const deBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deIpaRules } = await import("constants/de-ipa.rules");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(deIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
